import {
    Context,
    EventPayload,
    KumulosEvent,
    PromptConfig,
    SdkEvent
} from '../core';
import { h, render } from 'preact';

import Ui from './ui';
import { escapeRegExp } from '../core/utils';

type PushSubscriptionState = 'unsubscribed' | 'subscribed' | 'blocked';
type PromptManagerState = 'loading' | 'ready' | 'requesting';

// loading -> ready
// ready -> requesting
// requesting -> ready

export class PromptManager {
    readonly context: Context;

    private readonly uiRoot: Element | Text | undefined;

    private state?: PromptManagerState;
    private subscriptionState?: PushSubscriptionState;
    private eventQueue: EventPayload;
    private prompts?: { [x: string]: PromptConfig };

    constructor(ctx: Context) {
        this.eventQueue = [];
        this.context = ctx;

        this.setState('loading');
        ctx.subscribe('eventTracked', this.onEventTracked);

        // this.uiRoot = document.createElement('div');
        // document.body.appendChild(this.uiRoot);
        // render(<Ui msg="world" />, document.body);
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

        // render(<Ui msg="thing" />, document.body);
    };

    private evaluateTriggers() {
        // For all observed events
        // For all triggers
        // Reset observed events

        console.info('evaluating triggers');

        const matchedPrompts = [];
        for (let id in this.prompts) {
            const prompt = this.prompts[id];
            for (let i = 0; i < this.eventQueue.length; ++i) {
                const event = this.eventQueue[i];

                if (this.triggerMatched(prompt, event)) {
                    matchedPrompts.push(prompt);
                }
            }
        }

        this.activatePrompts(matchedPrompts);
        this.eventQueue = [];
    }

    private triggerMatched(prompt: PromptConfig, event: KumulosEvent): boolean {
        const trigger = prompt.trigger;

        if (trigger.event !== event.type) {
            return false;
        }

        if (!trigger.filters?.length) {
            // TODO handle declined/ask again after (need to merge some persistent state into memory)
            return true;
        }

        if (!event.data) {
            return false;
        }

        let allPropFiltersMatch = true;
        for (let i = 0; i < trigger.filters.length; ++i) {
            const [prop, values] = trigger.filters[i];

            const eventProp = event.data[prop];

            const tests = values.map(v => new RegExp(escapeRegExp(v).replace('\\*', '.*'), 'g'));
            const filterMatched = tests.reduce((matched, matcher) => matched || matcher.test(String(eventProp)), false);

            allPropFiltersMatch = allPropFiltersMatch && filterMatched;
        }

        if (!allPropFiltersMatch) {
            // TODO handle declined/ask again after (need to merge some persistent state into memory)
            return false;
        }

        // TODO handle declined/ask again after (need to merge some persistent state into memory)

        return true;
    }

    private activatePrompts(prompts: PromptConfig[]) {
        console.info('would activate: ', prompts);
    }

    private determineSubscriptionState() {
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
