import { Context, PromptConfig } from '../core';
import Kumulos from '..';
export declare type PromptManagerState = 'loading' | 'ready' | 'requesting';
export declare class PromptManager {
    private readonly kumulosClient;
    private readonly context;
    private readonly uiRoot;
    private state?;
    private subscriptionState?;
    private eventQueue;
    private prompts;
    private activePrompts;
    private currentlyRequestingPrompt?;
    private pushOpsManager?;
    private channels;
    private ui?;
    private platformConfig?;
    constructor(client: Kumulos, ctx: Context);
    private onEventTracked;
    private activateDeferredPrompt;
    private onRequestNativePrompt;
    private onPromptAccepted;
    private onPromptDeclined;
    private handlePromptActions;
    private render;
    private evaluateTriggers;
    promptActionNeedsTaken(prompt: PromptConfig): boolean;
    private maybePersistReminder;
    private hidePrompt;
    private isPromptSuppressed;
    private hasPromptReminderElapsed;
    private deferPromptActivation;
    private activatePrompt;
    private activatePrompts;
    private setState;
    private onEnter;
    private loadPrompts;
}
