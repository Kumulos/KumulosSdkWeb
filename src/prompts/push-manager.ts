import {
    Context,
    EventPayload,
    SdkEvent,
    PromptUiActions,
    ReminderTimeUnit,
    PlatformConfig,
    UiActionType,
    ChannelSubAction,
    PromptAction,
    UserChannelSelectDialogAction,
    ChannelListItem,
    PushPromptConfig,
    PromptConfigs,
    PromptManager,
    PromptConfig
} from '../core';
import getPushOpsManager, {
    PushOpsManager,
    PushSubscriptionState
} from '../core/push';
import { h, render, createContext } from 'preact';

import { Channel } from '../core/channels';
import Kumulos from '..';
import Ui from './ui';
import { triggerMatched } from './triggers';
import { persistPromptReminder, getPromptReminder } from '../core/storage';
import { PromptReminderDelayConfig } from '../core';
import { UIContext } from './ui-context';
import { loadPlatformConfig } from '../core/config';
import RootFrame, { RootFrameContainer } from '../core/root-frame';

export type PromptManagerState =
    | 'loading'
    | 'ready'
    | 'requesting'
    | 'postaction';

const REMINDER_TIME_UNIT_TO_MILLIS = {
    [ReminderTimeUnit.HOURS]: 1000 * 60 * 60,
    [ReminderTimeUnit.DAYS]: 1000 * 60 * 60 * 24
};

// loading -> ready
// ready -> requesting
// requesting -> ready
// ready -> postaction
// postaction -> ready

export class PushPromptManager implements PromptManager {
    private readonly kumulosClient: Kumulos;
    private readonly context: Context;

    private state?: PromptManagerState;
    private subscriptionState?: PushSubscriptionState;
    private prompts: PromptConfigs;
    private currentlyRequestingPrompt?: PushPromptConfig;
    private pushOpsManager?: PushOpsManager;
    private channels: Channel[];
    private platformConfig?: PlatformConfig;

    private renderPromptCallback?: (prompts: PromptConfig[]) => void;
    private promptLoadCallback?: (prompts: PromptConfigs) => void;

    constructor(client: Kumulos, ctx: Context, rootFrame: RootFrame) {
        this.channels = [];

        this.kumulosClient = client;
        this.context = ctx;
    }

    registerForPromptRender(cb: (prompts: PromptConfig[]) => void) {
        this.renderPromptCallback = cb;
    }

    registerForPromptLoad(cb: (prompts: PromptConfigs) => void) {
        this.promptLoadCallback = cb;
    }

    async onPromptConfirm(prompt: PromptConfig) {
        if (this.subscriptionState === 'unsubscribed') {
            await this.onRequestNativePrompt(prompt);
        }

        await this.handlePromptActions(prompt);

        await this.handleUserChannelSelection(channelSelections);

        if (this.subscriptionState === 'subscribed') {
            this.ui?.showToast(prompt.labels?.thanksForSubscribing!);
        }
    }

    onPromptCancelled(config: PromptConfig) {}

    load() {
        this.setState('loading');
    }

    private onRequestNativePrompt = async (prompt: PromptConfig) => {
        if ('requesting' === this.state) {
            return;
        }

        this.currentlyRequestingPrompt = prompt;

        this.setState('requesting');

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
    ) => {};

    private async handlePromptActions(prompt: PromptConfig) {
        if (!prompt.actions) {
            return;
        }

        console.info('Will handle actions: ', prompt.actions);

        const channelSubMgr = this.kumulosClient.getChannelSubscriptionManager();
        this.channels = await channelSubMgr.listChannels();

        await this.handleChannelSubActions(prompt);
        await this.handleChannelPostActions(prompt);
    }

    private async handleChannelSubActions(prompt: PromptConfig): Promise<void> {
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
        prompt: PromptConfig
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
                this.promptLoadCallback?.(this.prompts);
                this.setState('ready');
                break;
            case 'requesting':
                this.renderPromptCallback?.(this.currentlyRequestingPrompt);
                break;
            case 'ready':
                this.currentlyRequestingPrompt = undefined;
                this.currentPostAction = undefined;
                this.subscriptionState = await this.pushOpsManager?.getCurrentSubscriptionState(
                    this.context
                );
                this.renderPromptCallback?.(this.currentlyRequestingPrompt);
                break;
            case 'postaction':
                this.renderPromptCallback?.(this.currentlyRequestingPrompt);
                break;
        }
    }

    async loadPrompts(): Promise<void> {
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
