import { Context, PromptConfigs, PushPromptConfig } from '../core';
import { PushOpsManager } from '../core/push';
import RootFrame from '../core/root-frame';
export declare type PromptManagerState = 'loading' | 'ready' | 'requesting' | 'requesting-silent' | 'requesting-silent-dismissed' | 'postaction';
export declare class PromptManager {
    private readonly context;
    private readonly pushContainer;
    private readonly triggerFilter;
    private readonly pushManager;
    private state?;
    private subscriptionState?;
    private activePrompts;
    private currentlyRequestingPrompt?;
    private ui?;
    private prompts;
    constructor(ctx: Context, rootFrame: RootFrame, pushManager: PushOpsManager, prompts?: PromptConfigs<PushPromptConfig>);
    refresh(): void;
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
