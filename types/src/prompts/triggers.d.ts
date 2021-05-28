import { KumulosEvent, PromptConfig, PromptConfigs, Context } from '../core';
export declare function triggerMatched(prompt: PromptConfig, event: KumulosEvent): boolean;
export declare class PromptFilter {
    private eventQueue;
    constructor(ctx: Context);
    filterPrompts(prompts: PromptConfigs, filter: (prompt: PromptConfig) => boolean): Promise<PromptConfig[]>;
    private handleSdkEvent;
}
