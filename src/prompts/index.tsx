import { Context, EventPayload, PromptConfig, SdkEvent } from '../core';
import { h, render } from 'preact';

import { PushSubscriptionState } from '../core/push';
import Ui from './ui';
import { triggerMatched } from './triggers';

type PromptManagerState = 'loading' | 'ready' | 'requesting';

// loading -> ready
// ready -> requesting
// requesting -> ready

export class PromptManager {
    private readonly context: Context;

    private state?: PromptManagerState;
    private subscriptionState?: PushSubscriptionState;
    private eventQueue: EventPayload;
    private prompts: { [x: string]: PromptConfig };
    private activePrompts: PromptConfig[];

    constructor(ctx: Context) {
        this.prompts = {};
        this.eventQueue = [];
        this.activePrompts = [];

        this.context = ctx;

        this.setState('loading');
        ctx.subscribe('eventTracked', this.onEventTracked);
    }

    private onEventTracked = (e: SdkEvent) => {
        console.log('Tracked', e);

        const events = e.data as EventPayload;

        this.eventQueue.push(...events);

        if (this.state !== 'ready') {
            console.info('not ready, waiting on queue');
            return;
        }

        this.evaluateTriggers();
    };

    private activateDeferredPrompt = (prompt: PromptConfig) => {
        this.activatePrompt(prompt);
        this.render();
    };

    private render() {
        if (!this.subscriptionState) {
            return;
        }

        render(
            <Ui
                prompts={this.activePrompts}
                subscriptionState={this.subscriptionState}
            />,
            document.body
        );
    }

    private evaluateTriggers() {
        console.info('evaluating triggers');

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
        console.info('would activate: ', prompts);

        for (let i = 0; i < prompts.length; ++i) {
            const prompt = prompts[i];

            // TODO handle delayed activation (is this a purely UI concern?)
            if (prompt.trigger.afterSeconds !== undefined) {
                this.deferPromptActivation(prompt);
                continue;
            }

            this.activatePrompt(prompt);
        }

        this.render();
    }

    private determineSubscriptionState() {
        // TODO should this check pushManager.getSubscription()
        switch (Notification.permission) {
            case 'default':
                this.subscriptionState = 'unsubscribed';
                break;
            case 'denied':
                this.subscriptionState = 'blocked';
                break;
            case 'granted':
                this.subscriptionState = 'subscribed';
                break;
        }
    }

    private setState(state: PromptManagerState) {
        console.info('Setting state:' + state);
        this.state = state;
        this.onEnter(state);
    }

    private async onEnter(state: PromptManagerState) {
        switch (state) {
            case 'loading':
                this.determineSubscriptionState();
                await this.loadPrompts();
                this.setState('ready');
                break;
            case 'ready':
                this.evaluateTriggers();
                break;
        }
    }

    private loadPrompts(): Promise<void> {
        if (this.context.pushPrompts === 'auto') {
            // TODO go get configs from server & store away
            return Promise.resolve();
        }

        this.prompts = { ...this.context.pushPrompts };

        return Promise.resolve();
    }
}
