import { Context, PromptConfigs } from '../core';

import { loadConfig } from '../core/config';

export async function loadPromptConfigs(ctx: Context): Promise<PromptConfigs> {
    let prompts = {} as PromptConfigs;

    try {
        const platformConfig = await loadConfig(ctx);
        prompts = platformConfig.prompts;
    } catch (e) {
        console.warn(e);
    }

    return prompts;
}
