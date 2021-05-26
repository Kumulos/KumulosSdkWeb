import { Context, PushPromptConfigs } from '../core';

import { loadConfig } from '../core/config';

export async function loadPromptConfigs(
    ctx: Context
): Promise<PushPromptConfigs> {
    let prompts = {} as PushPromptConfigs;

    try {
        const platformConfig = await loadConfig(ctx);
        prompts = platformConfig.prompts;
    } catch (e) {
        console.warn(e);
    }

    return prompts;
}
