import { KumulosEvent, PromptConfig } from '../core';
export declare function triggerMatched(prompt: PromptConfig, event: KumulosEvent): boolean;
g, event: KumulosEvent): boolean;
export declare class PromptTriggerEventFilter<T extends PromptConfig> {
    private eventQueue;
    private eventReceivedCallback?;
    constructor(ctx: Context, eventReceivedCallback?: (e: SdkEvent) => void);
    filterPrompts(prompts: PromptConfigs<T>, filter: (prompt: T) => boolean): Promise<T[]>;
    private handleSdkEvent;
}
