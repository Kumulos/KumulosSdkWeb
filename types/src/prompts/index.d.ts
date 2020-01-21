import { Context } from '../core';
export declare type PromptManagerState = 'loading' | 'ready' | 'requesting';
export declare class PromptManager {
    private readonly context;
    private readonly uiRoot;
    private state?;
    private subscriptionState?;
    private eventQueue;
    private prompts;
    private activePrompts;
    private currentlyRequestingPrompt?;
    constructor(ctx: Context);
    private onEventTracked;
    private activateDeferredPrompt;
    private onRequestNativePrompt;
    private onPromptDeclined;
    private render;
    private evaluateTriggers;
    private deferPromptActivation;
    private activatePrompt;
    private activatePrompts;
    private setState;
    private onEnter;
    private loadPrompts;
}
