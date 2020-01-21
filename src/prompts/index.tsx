import { Context, EventPayload, PromptConfig, SdkEvent } from '../core';
import {
    PushSubscriptionState,
    getCurrentSubscriptionState,
    handleAutoResubscription,
    requestPermissionAndRegisterForPush
} from '../core/push';
import { h, render } from 'preact';

import Ui from './ui';
import { loadPromptConfigs } from './config';
import { triggerMatched } from './triggers';

export type PromptManagerState = 'loading' | 'ready' | 'requesting';

// loading -> ready
// ready -> requesting
// requesting -> ready

export class PromptManager {
    private readonly context: Context;
    private readonly uiRoot: HTMLDivElement;

    private state?: PromptManagerState;
    private subscriptionState?: PushSubscriptionState;
    private eventQueue: EventPayload;
    private prompts: { [x: string]: PromptConfig };
    private activePrompts: PromptConfig[];
    private currentlyRequestingPrompt?: PromptConfig;

    constructor(ctx: Context) {
        this.prompts = {};
        this.eventQueue = [];
        this.activePrompts = [];

        this.uiRoot = document.createElement('div');
        this.uiRoot.id = 'kumulos-ui-root';
        document.body.appendChild(this.uiRoot);

        this.context = ctx;

        this.setState('loading');
        ctx.subscribe('eventTracked', this.onEventTracked);
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

        this.subscriptionState = await requestPermissionAndRegisterForPush(
            this.context
        );

        this.setState('ready');
    };

    private onPromptDeclined = (prompt: PromptConfig) => {
        // TODO record state etc.
    };

    private render() {
        if (!this.subscriptionState || !this.state) {
            return;
        }

        render(
            <Ui
                prompts={this.activePrompts}
                subscriptionState={this.subscriptionState}
                promptManagerState={this.state as PromptManagerState}
                requestNativePrompt={this.onRequestNativePrompt}
                onPromptDeclined={this.onPromptDeclined}
                currentlyRequestingPrompt={this.currentlyRequestingPrompt}
            />,
            this.uiRoot
        );
    }

    private evaluateTriggers() {
        // TODO future allow this to run to show alternate UIs
        if (this.subscriptionState === 'subscribed') {
            return;
        }

        console.info('Evaluating prompt triggers');

        const matchedPrompts = [];
        for (let id in this.prompts) {
            const prompt = this.prompts[id];
            for (let i = 0; i < this.eventQueue.length; ++i) {
                const event = this.eventQueue[i];

                if (triggerMatched(prompt, event)) {
                    matchedPrompts.push(prompt);
                }
            }
        }

        // TODO filter out declined/ask again after (need to merge some persistent state into memory)

        this.activatePrompts(matchedPrompts);
        this.eventQueue = [];
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
                await handleAutoResubscription(this.context);
                this.subscriptionState = await getCurrentSubscriptionState(
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
                this.subscriptionState = await getCurrentSubscriptionState(
                    this.context
                );
                this.evaluateTriggers();
                this.render();
                break;
        }
    }

    private async loadPrompts(): Promise<void> {
        if (this.context.pushPrompts !== 'auto') {
            this.prompts = { ...this.context.pushPrompts };
            return;
        }

        try {
            this.prompts = await loadPromptConfigs(this.context);
        } catch (e) {
            console.error('Failed to load prompts', e);
            this.prompts = {};
        }

        return Promise.resolve();
    }
}
