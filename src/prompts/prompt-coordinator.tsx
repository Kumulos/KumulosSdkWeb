import {
    Context,
    EventPayload,
    SdkEvent,
    PromptUiActions,
    ReminderTimeUnit,
    PlatformConfig,
    UiActionType,
    PromptAction,
    PromptConfig,
    PromptManager,
    PromptConfigs
} from '../core';
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
import Ui2 from './ui2';
import { PushPromptManager } from './push-manager';

const REMINDER_TIME_UNIT_TO_MILLIS = {
    [ReminderTimeUnit.HOURS]: 1000 * 60 * 60,
    [ReminderTimeUnit.DAYS]: 1000 * 60 * 60 * 24
};

export class PromptCoordinator {
    private readonly kumulosClient: Kumulos;
    private readonly context: Context;
    private readonly rootFrame: RootFrame;
    private readonly promptMangers: PromptManager[];

    private prompts: PromptConfigs;
    private activePrompts: PromptConfig[];
    private eventQueue: EventPayload;

    private ui?: Ui;
    private platformConfig?: PlatformConfig;
    private currentPostAction?: PromptAction;

    constructor(
        client: Kumulos,
        ctx: Context,
        rootFrame: RootFrame,
        promptMangers: PromptManager[]
    ) {
        this.prompts = {};
        this.activePrompts = [];
        this.eventQueue = [];
        this.promptMangers = promptMangers;

        this.rootFrame = rootFrame;
        this.kumulosClient = client;
        this.context = ctx;

        ctx.subscribe('eventTracked', this.onEventTracked);

        this.promptMangers.forEach(async m => {
            m.registerForPromptLoad(this.onPromptLoad);
            m.registerForPromptRender(this.onPromptRender);
            m.load();
        });
    }

    onPromptLoad = (prompts: PromptConfigs) => {
        this.prompts = { ...this.prompts, ...prompts };
    };

    onPromptRender = (prompt?: PromptConfig) => {
        this.render();
    };

    private onPromptConfirmed = (prompt: PromptConfig) => {
        this.promptMangers.forEach(m => m.onPromptConfirm(prompt));
    };

    private onPromptCancelled = (prompt: PromptConfig) => {
        this.promptMangers.forEach(m => m.onPromptCancelled(prompt));
    };

    private onEventTracked = (e: SdkEvent) => {
        console.info('Prompt trigger saw event', e);

        const events = e.data as EventPayload;

        this.eventQueue.push(...events);

        this.evaluateTriggers();
    };

    private activateDeferredPrompt = (prompt: PromptConfig) => {
        this.activatePrompt(prompt);
        this.render();
    };

    private render() {
        render(
            <Ui2
                ref={r => (this.ui = r)}
                prompts={this.activePrompts}
                managers={this.promptMangers}
                onPromptAccepted={this.onPromptConfirmed}
                onPromptDeclined={this.onPromptCancelled}
                currentPostAction={this.currentPostAction}
            />,
            this.rootFrame.element
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

                if (!promptSuppressed && triggerMatched(prompt, event)) {
                    matchedPrompts.push(prompt);
                }
            }
        }

        this.activatePrompts(matchedPrompts);
        this.eventQueue = [];
    }

    private maybePersistReminder(prompt: PromptConfig) {
        const { uiActions } = prompt as PromptUiActions;

        if (!uiActions) {
            return;
        }

        const { type } = uiActions.decline;

        switch (type) {
            case UiActionType.REMIND:
                return persistPromptReminder(prompt.uuid, {
                    declinedOn: Date.now()
                });
            case UiActionType.DECLINE:
                return persistPromptReminder(prompt.uuid, 'suppressed');
            default:
                return console.warn(
                    `Unsupported decline action type ${type} supported for prompt ${prompt.uuid}, fall back to always show this prompt when declined`
                );
        }
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

        if (uiActions.decline.type !== UiActionType.REMIND) {
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
}
