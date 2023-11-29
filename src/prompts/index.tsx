import {
    Context,
    PromptConfig,
    PromptConfigs,
    PushPromptConfig,
    SdkEvent
} from '../core';
import { PushOpsManager, PushSubscriptionState } from '../core/push';
import RootFrame, { RootFrameContainer } from '../core/root-frame';
import { h, render } from 'preact';

import { PromptTriggerEventFilter } from './triggers';
import Ui from './ui';
import { deferPromptActivation } from './utils';
import { maybePersistReminder } from './prompt-reminder';

export type PromptManagerState =
    | 'loading'
    | 'ready'
    | 'requesting'
    | 'requesting-silent'
    | 'requesting-silent-dismissed'
    | 'postaction';

// loading -> ready
// ready -> requesting
// requesting -> ready
// ready -> postaction
// postaction -> ready

export class PromptManager {
    private readonly context: Context;
    private readonly pushContainer: RootFrameContainer;
    private readonly triggerFilter: PromptTriggerEventFilter<PushPromptConfig>;
    private readonly pushManager: PushOpsManager;

    private state?: PromptManagerState;
    private subscriptionState?: PushSubscriptionState;
    private activePrompts: PushPromptConfig[];
    private currentlyRequestingPrompt?: PushPromptConfig;
    private ui?: Ui;
    private prompts: PromptConfigs<PushPromptConfig>;

    constructor(
        ctx: Context,
        rootFrame: RootFrame,
        pushManager: PushOpsManager,
        prompts?: PromptConfigs<PushPromptConfig>
    ) {
        this.prompts = prompts ?? {};
        this.activePrompts = [];
        this.triggerFilter = new PromptTriggerEventFilter<PushPromptConfig>(
            ctx,
            this.onEventTracked
        );

        this.pushContainer = rootFrame.createContainer('push');
        this.context = ctx;
        this.pushManager = pushManager;

        this.setState('loading');
    }

    public async hideShownPrompts() {
        this.activePrompts = [];
        this.setState('ready');
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

        this.pushManager.isNativePromptShown().then(isNativePromptShown => {
            if (isNativePromptShown) {
                this.setState('requesting');
            } else {
                this.setState('requesting-silent');
            }
        });

        this.subscriptionState = await this.pushManager.requestPermissionAndRegisterForPush(
            this.context
        );

        this.setState('ready');
    };

    private onPromptAccepted = async (prompt: PushPromptConfig) => {
        if (this.subscriptionState === 'unsubscribed') {
            await this.onRequestNativePrompt(prompt);
        }

        this.hideAndSuppressPrompts(prompt);

        if (this.subscriptionState === 'subscribed') {
            this.ui?.showToast(prompt.labels?.thanksForSubscribing!);
        }
    };

    private onPromptDeclined = (prompt: PushPromptConfig) => {
        maybePersistReminder(prompt);
        this.hidePrompt(prompt);
    };

    private onDismissOverlay = (prompt: PushPromptConfig) => {
        this.hidePrompt(prompt);
        this.setState('requesting-silent-dismissed');
    };

    private hideAndSuppressPrompts(prompt: PushPromptConfig) {
        const { subscriptionState } = this;

        this.hidePrompt(prompt);

        if (subscriptionState !== 'unsubscribed') {
            this.activePrompts.forEach(p => this.hidePrompt(p));
        }
    }

    private render() {
        if (!this.subscriptionState || !this.state) {
            return;
        }

        render(
            <Ui
                ref={r => (this.ui = r)}
                prompts={this.activePrompts}
                subscriptionState={this.subscriptionState}
                promptManagerState={this.state}
                onPromptAccepted={this.onPromptAccepted}
                onPromptDeclined={this.onPromptDeclined}
                onDismissOverlay={this.onDismissOverlay}
                currentlyRequestingPrompt={this.currentlyRequestingPrompt}
            />,
            this.pushContainer.element
        );
    }

    private async evaluateTriggers() {
        console.info('Evaluating prompt triggers');

        const matchedPrompts = await this.triggerFilter.filterPrompts(
            this.prompts,
            _ => {
                return this.promptActionNeedsTaken();
            }
        );

        this.activatePrompts(matchedPrompts);
    }

    private promptActionNeedsTaken(): boolean {
        if (this.subscriptionState === 'unsubscribed') {
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
                await this.pushManager.handleAutoResubscription(this.context);
                this.setState('ready');
                break;
            case 'ready':
                this.currentlyRequestingPrompt = undefined;
                this.subscriptionState = await this.pushManager.getCurrentSubscriptionState(
                    this.context
                );
                await this.evaluateTriggers();
                this.render();
                break;
            case 'postaction':
            case 'requesting':
            case 'requesting-silent':
            case 'requesting-silent-dismissed':
                this.render();
                break;
        }
    }
}
