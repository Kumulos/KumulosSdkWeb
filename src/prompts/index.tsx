import {
    Context,
    EventPayload,
    PromptConfig,
    SdkEvent,
    PromptUiActions,
    ReminderTimeUnit,
    PlatformConfig,
    UiActionType
} from '../core';
import getPushOpsManager, {
    PushOpsManager,
    PushSubscriptionState
} from '../core/push';
import { h, render } from 'preact';

import { Channel } from '../core/channels';
import Kumulos from '..';
import Ui from './ui';
import { loadPromptConfigs } from './config';
import { triggerMatched } from './triggers';
import { persistPromptReminder, getPromptReminder } from '../core/storage';
import { PromptReminderDelayConfig } from '../core';
import { PlatformConfigContext } from './ui-context';
import { loadConfig } from '../core/config';

export type PromptManagerState = 'loading' | 'ready' | 'requesting';

const REMINDER_TIME_UNIT_TO_MILLIS = {
    [ReminderTimeUnit.HOURS]: 1000 * 60 * 60,
    [ReminderTimeUnit.DAYS]: 1000 * 60 * 60 * 24
};

// loading -> ready
// ready -> requesting
// requesting -> ready

export class PromptManager {
    private readonly kumulosClient: Kumulos;
    private readonly context: Context;
    private readonly uiRoot: HTMLDivElement;

    private state?: PromptManagerState;
    private subscriptionState?: PushSubscriptionState;
    private eventQueue: EventPayload;
    private prompts: { [x: string]: PromptConfig };
    private activePrompts: PromptConfig[];
    private currentlyRequestingPrompt?: PromptConfig;
    private pushOpsManager?: PushOpsManager;
    private channels: Channel[];
    private ui?: Ui;
    private platformConfig?: PlatformConfig;

    constructor(client: Kumulos, ctx: Context) {
        this.prompts = {};
        this.eventQueue = [];
        this.activePrompts = [];
        this.channels = [];

        this.uiRoot = document.createElement('div');
        this.uiRoot.id = 'kumulos-ui-root';
        this.kumulosClient = client;
        this.context = ctx;

        ctx.subscribe('eventTracked', this.onEventTracked);

        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(this.uiRoot);
            this.setState('loading');
        });
    }

    private onEventTracked = (e: SdkEvent) => {
        console.info('Prompt trigger saw event', e);

        const events = e.data as EventPayload;

        this.eventQueue.push(...events);

        if (this.state !== 'ready') {
            console.info('Not ready, waiting on queue');
            return;
        }

        this.evaluateTriggers();
    };

    private activateDeferredPrompt = (prompt: PromptConfig) => {
        this.activatePrompt(prompt);
        this.render();
    };

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

    private onPromptAccepted = async (prompt: PromptConfig) => {
        if (this.subscriptionState === 'unsubscribed') {
            await this.onRequestNativePrompt(prompt);
        }

        await this.handlePromptActions(prompt);

        if (this.subscriptionState === 'subscribed') {
            this.ui?.showToast(prompt.labels?.thanksForSubscribing);
        }

        this.hidePrompt(prompt);
    };

    private onPromptDeclined = (prompt: PromptConfig) => {
        this.maybePersistReminder(prompt);
        this.hidePrompt(prompt);
    };

    private async handlePromptActions(prompt: PromptConfig) {
        if (!prompt.actions) {
            return;
        }

        console.info('Will handle actions: ', prompt.actions);

        const channelsToSub = prompt.actions
            .map(a => a.channelUuid)
            .filter(uuid =>
                this.channels.find(
                    c => c.uuid === uuid && c.subscribed === false
                )
            );

        if (!channelsToSub.length) {
            console.info('No channels to subscribe to found, aborting');
            return;
        }

        await this.kumulosClient
            .getChannelSubscriptionManager()
            .subscribe(channelsToSub);

        this.channels = await this.kumulosClient
            .getChannelSubscriptionManager()
            .listChannels();
    }

    private render() {
        if (!this.subscriptionState || !this.state || !this.platformConfig) {
            return;
        }

        render(
            <PlatformConfigContext.Provider value={this.platformConfig}>
                <Ui
                    ref={r => (this.ui = r)}
                    prompts={this.activePrompts}
                    subscriptionState={this.subscriptionState}
                    promptManagerState={this.state as PromptManagerState}
                    onPromptAccepted={this.onPromptAccepted}
                    onPromptDeclined={this.onPromptDeclined}
                    currentlyRequestingPrompt={this.currentlyRequestingPrompt}
                />
            </PlatformConfigContext.Provider>,
            this.uiRoot
        );
    }

    private async evaluateTriggers() {
        console.info('Evaluating prompt triggers');

        const matchedPrompts = [];
        for (let id in this.prompts) {
            const prompt = this.prompts[id];
            for (let i = 0; i < this.eventQueue.length; ++i) {
                const event = this.eventQueue[i];
                const promptSuppressed = await this.isPromptSuppressed(prompt);

                if (
                    !promptSuppressed &&
                    triggerMatched(prompt, event) &&
                    this.promptActionNeedsTaken(prompt)
                ) {
                    matchedPrompts.push(prompt);
                }
            }
        }

        this.activatePrompts(matchedPrompts);
        this.eventQueue = [];
    }

    promptActionNeedsTaken(prompt: PromptConfig): boolean {
        if (this.subscriptionState === 'unsubscribed') {
            return true;
        }

        const channelsToSub = prompt.actions?.map(a => a.channelUuid) ?? [];
        const needsToSub =
            this.channels.filter(
                c => channelsToSub.indexOf(c.uuid) > -1 && !c.subscribed
            ).length > 0;

        if (needsToSub) {
            return true;
        }

        return false;
    }

    private maybePersistReminder(prompt: PromptConfig) {
        const { uiActions } = prompt as PromptUiActions;

        if (!uiActions) {
            return;
        }

        const { type } = uiActions.decline;

        switch (type) {
            case UiActionType.REMIND:
                return persistPromptReminder(prompt.uuid, { declinedOn: Date.now() });
            case UiActionType.DECLINE:
                return persistPromptReminder(prompt.uuid, 'suppressed');
            default:
                return console.warn(`Unsupported decline action type ${type} supported for prompt ${prompt.uuid}, fall back to always show this prompt when declined`);
        }
    }

    private hidePrompt(prompt: PromptConfig) {
        const idx = this.activePrompts.indexOf(prompt);
        this.activePrompts.splice(idx, 1);

        this.render();
    }

    private async isPromptSuppressed(prompt: PromptConfig): Promise<boolean> {
        const reminder = await getPromptReminder(prompt.uuid);

        if (!reminder) {
            return false;
        }

        if ('suppressed' === reminder) {
            return true;
        }

        const { uiActions } = prompt as PromptUiActions;

        if (uiActions.decline.type !== 'remind') {
            return false;
        }

        return !this.hasPromptReminderElapsed(
            reminder.declinedOn,
            uiActions.decline.delay
        );
    }

    private hasPromptReminderElapsed(
        declinedOnMillis: number,
        delayConfig: PromptReminderDelayConfig
    ): boolean {
        return (
            Date.now() - declinedOnMillis >
            REMINDER_TIME_UNIT_TO_MILLIS[delayConfig.timeUnit] *
                delayConfig.duration
        );
    }

    private deferPromptActivation(prompt: PromptConfig) {
        if (!prompt.trigger.afterSeconds || prompt.trigger.afterSeconds < 0) {
            return;
        }

        console.info(
            'Deferring prompt activation by ' + prompt.trigger.afterSeconds
        );

        setTimeout(
            this.activateDeferredPrompt,
            prompt.trigger.afterSeconds * 1000,
            prompt
        );
    }

    private activatePrompt(prompt: PromptConfig) {
        // TODO is identity ok for comparison here... might need to use ID
        if (this.activePrompts.indexOf(prompt) > -1) {
            return;
        }

        this.activePrompts.push(prompt);
    }

    private activatePrompts(prompts: PromptConfig[]) {
        console.info('Will activate prompts: ', prompts);

        for (let i = 0; i < prompts.length; ++i) {
            const prompt = prompts[i];

            if (prompt.trigger.afterSeconds !== undefined) {
                this.deferPromptActivation(prompt);
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
                this.setState('ready');
                break;
            case 'requesting':
                this.render();
                break;
            case 'ready':
                this.currentlyRequestingPrompt = undefined;
                this.subscriptionState = await this.pushOpsManager?.getCurrentSubscriptionState(
                    this.context
                );
                await this.evaluateTriggers();
                this.render();
                break;
        }
    }

    private async loadPrompts(): Promise<void> {
        this.platformConfig = await loadConfig(this.context);

        if (null === this.platformConfig) {
            console.error('Failed to load prompts config');
            return;
        }

        if (this.context.pushPrompts !== 'auto') {
            this.prompts = { ...this.context.pushPrompts };
        } else {
            this.prompts =  { ...this.platformConfig.prompts || {} };
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
