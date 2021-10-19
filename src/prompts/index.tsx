import {
    Context,
    SdkEvent,
    PlatformConfig,
    ChannelSubAction,
    PromptAction,
    UserChannelSelectDialogAction,
    ChannelListItem,
    PushPromptConfig,
    PromptConfigs,
    PromptConfig
} from '../core';
import getPushOpsManager, {
    PushOpsManager,
    PushSubscriptionState
} from '../core/push';
import { h, render } from 'preact';

import { Channel } from '../core/channels';
import Kumulos from '..';
import Ui from './ui';
import { PromptTriggerEventFilter } from './triggers';
import { UIContext } from './ui-context';
import { loadPlatformConfig } from '../core/config';
import RootFrame, { RootFrameContainer } from '../core/root-frame';
import { maybePersistReminder } from './prompt-reminder';
import { deferPromptActivation } from './utils';

export type PromptManagerState =
    | 'loading'
    | 'ready'
    | 'requesting'
    | 'requesting-silent'
    | 'postaction';

// loading -> ready
// ready -> requesting
// requesting -> ready
// ready -> postaction
// postaction -> ready

export class PromptManager {
    private readonly kumulosClient: Kumulos;
    private readonly context: Context;
    private readonly pushContainer: RootFrameContainer;
    private readonly triggerFilter: PromptTriggerEventFilter<PushPromptConfig>;

    private state?: PromptManagerState;
    private subscriptionState?: PushSubscriptionState;
    private prompts: PromptConfigs<PushPromptConfig>;
    private activePrompts: PushPromptConfig[];
    private currentlyRequestingPrompt?: PushPromptConfig;
    private pushOpsManager?: PushOpsManager;
    private channels: Channel[];
    private ui?: Ui;
    private platformConfig?: PlatformConfig;
    private currentPostAction?: PromptAction;

    constructor(client: Kumulos, ctx: Context, rootFrame: RootFrame) {
        this.prompts = {};
        this.activePrompts = [];
        this.channels = [];
        this.triggerFilter = new PromptTriggerEventFilter<PushPromptConfig>(
            ctx,
            this.onEventTracked
        );

        this.pushContainer = rootFrame.createContainer('push');
        this.kumulosClient = client;
        this.context = ctx;

        this.setState('loading');
    }

    private onEventTracked = (e: SdkEvent) => {
        console.info('Prompt trigger saw event', e);

        if (this.state !== 'ready') {
            console.info('Not ready, waiting on queue');
            return;
        }

        this.evaluateTriggers();
    };

    private activateDeferredPrompt = (prompt: PromptConfig) => {
        this.activatePrompt(prompt as PushPromptConfig);
        this.render();
    };

    private onRequestNativePrompt = async (prompt: PushPromptConfig) => {
        if ('requesting' === this.state || 'requesting-silent' === this.state) {
            return;
        }

        this.currentlyRequestingPrompt = prompt;

        this.pushOpsManager?.isNativePromptShown().then(isNativePromptShown => {
            if (isNativePromptShown) {
                this.setState('requesting');
            } else {
                this.setState('requesting-silent');
            }
        });

        this.subscriptionState = await this.pushOpsManager?.requestPermissionAndRegisterForPush(
            this.context
        );

        this.setState('ready');
    };

    private onRequestPostActionPrompt = async (
        prompt: PushPromptConfig,
        action: PromptAction
    ) => {
        if ('postaction' === this.state) {
            return;
        }

        if ('userChannelSelectDialog' !== action.type) {
            return;
        }

        this.currentlyRequestingPrompt = prompt;
        this.currentPostAction = action;

        this.setState('postaction');
    };

    private onPromptAccepted = async (
        prompt: PushPromptConfig,
        channelSelections?: ChannelListItem[]
    ) => {
        if (this.subscriptionState === 'unsubscribed') {
            await this.onRequestNativePrompt(prompt);
        }

        this.hideAndSuppressPrompts(prompt);

        if (this.subscriptionState === 'subscribed') {
            await this.handlePromptActions(prompt);
            await this.handleUserChannelSelection(channelSelections);

            this.ui?.showToast(prompt.labels?.thanksForSubscribing!);
        }
    };

    private onPostActionConfirm = async (
        prompt: PushPromptConfig,
        channelSelections?: ChannelListItem[]
    ) => {
        await this.handleUserChannelSelection(channelSelections);

        this.setState('ready');
        this.hideAndSuppressPrompts(prompt);
    };

    private onPromptDeclined = (prompt: PushPromptConfig) => {
        maybePersistReminder(prompt);
        this.hidePrompt(prompt);
    };

    private hideAndSuppressPrompts(prompt: PushPromptConfig) {
        const { subscriptionState } = this;

        this.hidePrompt(prompt);

        if (subscriptionState !== 'unsubscribed') {
            this.activePrompts.forEach(p => this.hidePrompt(p));
        }
    }

    private async handlePromptActions(prompt: PushPromptConfig) {
        if (!prompt.actions) {
            return;
        }

        console.info('Will handle actions: ', prompt.actions);

        const channelSubMgr = this.kumulosClient.getChannelSubscriptionManager();
        this.channels = await channelSubMgr.listChannels();

        await this.handleChannelSubActions(prompt);
        await this.handleChannelPostActions(prompt);
    }

    private async handleChannelSubActions(
        prompt: PushPromptConfig
    ): Promise<void> {
        if (undefined === prompt.actions) {
            return;
        }

        const actions = prompt.actions.filter<ChannelSubAction>(
            (action: PromptAction): action is ChannelSubAction =>
                action.type === 'subscribeToChannel'
        );

        const uuidsToSubscribe = actions
            .filter(action => {
                const channeltoSub = this.channels.find(
                    c => c.uuid === action.channelUuid && c.subscribed === false
                );

                if (undefined === channeltoSub) {
                    console.info(
                        `Unable to subscribe to channel '${action.channelUuid}' as it does not exist`
                    );
                    return false;
                }

                return true;
            })
            .map(action => action.channelUuid);

        await this.kumulosClient
            .getChannelSubscriptionManager()
            .subscribe(uuidsToSubscribe);
    }

    private async handleChannelPostActions(
        prompt: PushPromptConfig
    ): Promise<void> {
        if (undefined === prompt.actions) {
            return;
        }

        // post actions only apply to `userChannelSelectDialog` actions
        const actions = prompt.actions.filter<UserChannelSelectDialogAction>(
            (action: PromptAction): action is UserChannelSelectDialogAction =>
                action.type === 'userChannelSelectDialog'
        );

        if (!actions.length) {
            return;
        }

        // currently only expecting 1 configured `userChannelSelectDialog` action
        this.onRequestPostActionPrompt(prompt, actions[0]);
    }

    private async handleUserChannelSelection(
        channelSelections?: ChannelListItem[]
    ) {
        if (undefined === channelSelections) {
            return;
        }

        const channelSubMgr = this.kumulosClient.getChannelSubscriptionManager();

        const unsubscribes = channelSelections
            .filter(cs => !cs.checked)
            .map(cs => cs.channel.uuid);
        await channelSubMgr.unsubscribe(unsubscribes);

        const subscribes = channelSelections
            .filter(cs => cs.checked)
            .map(cs => cs.channel.uuid);
        await channelSubMgr.subscribe(subscribes);
    }

    private render() {
        if (!this.subscriptionState || !this.state || !this.platformConfig) {
            return;
        }

        render(
            <UIContext.Provider
                value={{
                    platformConfig: this.platformConfig,
                    channelList: this.channels
                }}
            >
                <Ui
                    ref={r => (this.ui = r)}
                    prompts={this.activePrompts}
                    subscriptionState={this.subscriptionState}
                    promptManagerState={this.state}
                    onPromptAccepted={this.onPromptAccepted}
                    onPromptDeclined={this.onPromptDeclined}
                    onPostActionConfirm={this.onPostActionConfirm}
                    currentlyRequestingPrompt={this.currentlyRequestingPrompt}
                    currentPostAction={this.currentPostAction}
                />
            </UIContext.Provider>,
            this.pushContainer.element
        );
    }

    private async evaluateTriggers() {
        console.info('Evaluating prompt triggers');

        const matchedPrompts = await this.triggerFilter.filterPrompts(
            this.prompts,
            prompt => {
                return this.promptActionNeedsTaken(prompt);
            }
        );

        this.activatePrompts(matchedPrompts);
    }

    promptActionNeedsTaken(prompt: PushPromptConfig): boolean {
        if (this.subscriptionState === 'unsubscribed') {
            return true;
        }

        const channelsToSub =
            prompt.actions
                ?.filter(
                    (action: PromptAction): action is ChannelSubAction =>
                        action.type === 'subscribeToChannel'
                )
                .map(a => a.channelUuid) ?? [];
        const needsToSub =
            this.channels.filter(
                c => channelsToSub.includes(c.uuid) && !c.subscribed
            ).length > 0;

        if (needsToSub) {
            return true;
        }

        return false;
    }

    private hidePrompt(prompt: PushPromptConfig) {
        const idx = this.activePrompts.indexOf(prompt);
        this.activePrompts.splice(idx, 1);

        this.render();
    }

    private activatePrompt(prompt: PushPromptConfig) {
        // TODO is identity ok for comparison here... might need to use ID
        if (this.activePrompts.indexOf(prompt) > -1) {
            return;
        }

        this.activePrompts.push(prompt);
    }

    private activatePrompts(prompts: PushPromptConfig[]) {
        console.info('Will activate prompts: ', prompts);

        for (let i = 0; i < prompts.length; ++i) {
            const prompt = prompts[i];

            if (deferPromptActivation(prompt, this.activateDeferredPrompt)) {
                continue;
            }

            this.activatePrompt(prompt);
        }

        this.render();
    }

    private setState(state: PromptManagerState) {
        console.info('Setting prompt manager state:' + state);
        this.state = state;
        this.onEnter(state);
    }

    private async onEnter(state: PromptManagerState) {
        switch (state) {
            case 'loading':
                this.pushOpsManager = await getPushOpsManager(this.context);
                await this.pushOpsManager.handleAutoResubscription(
                    this.context
                );
                this.subscriptionState = await this.pushOpsManager.getCurrentSubscriptionState(
                    this.context
                );
                await this.loadPrompts();
                this.channels = await this.kumulosClient
                    .getChannelSubscriptionManager()
                    .listChannels();
                this.setState('ready');
                break;
            case 'requesting':
            case 'requesting-silent':
                this.render();
                break;
            case 'ready':
                this.currentlyRequestingPrompt = undefined;
                this.currentPostAction = undefined;
                this.subscriptionState = await this.pushOpsManager?.getCurrentSubscriptionState(
                    this.context
                );
                await this.evaluateTriggers();
                this.render();
                break;
            case 'postaction':
                this.render();
                break;
        }
    }

    private async loadPrompts(): Promise<void> {
        this.platformConfig = await loadPlatformConfig(this.context);

        if (!this.platformConfig.publicKey) {
            console.error('Failed to load prompts config');
            return;
        }

        if (this.context.pushPrompts !== 'auto') {
            this.prompts = { ...this.context.pushPrompts };
        } else {
            this.prompts = { ...(this.platformConfig.prompts || {}) };
        }

        for (let id in this.prompts) {
            const hasChannelOp = Boolean(
                this.prompts[id].actions?.filter(
                    a => a.type === 'subscribeToChannel'
                )?.length
            );

            if (hasChannelOp) {
                try {
                    this.channels = await this.kumulosClient
                        .getChannelSubscriptionManager()
                        .listChannels();
                } catch (e) {
                    // Noop
                }
                break;
            }
        }

        return Promise.resolve();
    }
}
