import { Context, PromptConfigs, PushPromptConfig } from '../core';
import RootFrame from '../core/root-frame';
export declare type PromptManagerState = 'loading' | 'ready' | 'requesting' | 'requesting-silent' | 'requesting-silent-dismissed';
export declare class PromptManager {
    private readonly context;
    private readonly pushContainer;
    private readonly triggerFilter;
    private state?;
    private subscriptionState?;
    private activePrompts;
    private currentlyRequestingPrompt?;
    private pushOpsManager?;
    private ui?;
    private prompts;
    constructor(ctx: Context, rootFrame: RootFrame, prompts?: PromptConfigs<PushPromptConfig>);
    private onEventTracked;
    private activateDeferredPrompt;
    private onRequestNativePrompt;
    private onPromptAccepted;
    private onPromptDeclined;
    private onDismissOverlay;
    private hideAndSuppressPrompts;
    private render;
    private evaluateTriggers;
    private promptActionNeedsTaken;
    private hidePrompt;
    private activatePrompt;
    private activatePrompts;
    private setState;
    private onEnter;
}
