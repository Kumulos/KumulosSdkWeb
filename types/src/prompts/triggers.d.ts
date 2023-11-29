import { Context, KumulosEvent, PromptConfig, PromptConfigs } from '../core';
export declare function triggerMatched(prompt: PromptConfig, event: KumulosEvent): boolean;
export declare class PromptTriggerEventFilter<T extends PromptConfig> {
    private eventQueue;
    private eventReceivedCallback?;
    constructor(ctx: Context, eventReceivedCallback?: (event: KumulosEvent) => void);
    filterPrompts(prompts: PromptConfigs<T>, filter?: (prompt: T) => boolean): Promise<T[]>;
    private handleSdkEvent;
}
