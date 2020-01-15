import { Context, PUSH_BASE_URL, PromptConfigs } from '../core';
import { get, set } from '../core/storage';

import { authedFetchJson } from '../core/utils';

export interface PlatformConfig {
    publicKey: string;
    prompts: PromptConfigs;
}

function loadConfig(ctx: Context): Promise<PlatformConfig> {
    const url = `${PUSH_BASE_URL}/v1/web/config`;
    return authedFetchJson<PlatformConfig>(ctx, url);
}

export async function loadPromptConfigs(ctx: Context): Promise<PromptConfigs> {
    const MAX_AGE_MS = 6 * 60 * 60 * 1000;
    let remotePrompts = {} as PromptConfigs;

    const lastPromptLoadTime = await get<number>('promptsUpdated') ?? 0;
    let updatedRemoteConfig = false;

    if (Date.now() - lastPromptLoadTime > MAX_AGE_MS) {
        console.info('Prompts never synced/stale, syncing now...');

        try {
            const platformConfig = await loadConfig(ctx);
            remotePrompts = platformConfig.prompts;
            updatedRemoteConfig = true;
        } catch (e) {
            console.warn(e);
            // Noop (fallback to local)
        }
    }

    const localPrompts = await get<PromptConfigs>('prompts') ?? {};

    let mergedPrompts = { ...localPrompts };

    if (updatedRemoteConfig) {
        for (let id in remotePrompts) {
            mergedPrompts[id] = remotePrompts[id];
        }

        const localIds = Object.keys(localPrompts);
        const remoteIds = Object.keys(remotePrompts);
        const removedIds = localIds.filter(id => remoteIds.indexOf(id) === -1);

        for (let id of removedIds) {
            delete mergedPrompts[id];
        }

        await set('prompts', mergedPrompts);
        await set('promptsUpdated', Date.now());
    }

    return mergedPrompts;
}
