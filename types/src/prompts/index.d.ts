import { Context, PromptConfig } from '../core';
import { Channel } from '../core/channels';
import Kumulos from '..';
export declare type PromptManagerState = 'loading' | 'ready' | 'requesting' | 'postaction' | 'cleanup';
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
    private currentPostAction?;
    constructor(client: Kumulos, ctx: Context);
    getChannels(): Channel[];
    getState(): PromptManagerState | undefined;
    private onEventTracked;
    private activateDeferredPrompt;
    private onRequestNativePrompt;
    private onRequestPostActionPrompt;
    private onPromptAccepted;
    private onPostActionConfirm;
    private onPromptDeclined;
    private hideAndSuppressPrompts;
    private handlePromptActions;
    private handleChannelSubActions;
    private handleChannelPostActions;
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
