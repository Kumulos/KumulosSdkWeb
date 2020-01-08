import { Context, PromptConfigs } from '../core';
export interface PlatformConfig {
    publicKey: string;
    prompts: PromptConfigs;
}
export declare function loadPromptConfigs(ctx: Context): Promise<PromptConfigs>;
