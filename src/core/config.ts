import { Context, PUSH_BASE_URL, PlatformConfig } from '.';
import { get, set } from './storage';

import { authedFetchJson } from './utils';

export async function loadConfig(ctx: Context): Promise<PlatformConfig> {
    let config = (await get<PlatformConfig>('platformConfig')) ?? {};
    const MAX_AGE_MS = 1 * 60 * 60 * 1000;

    const lastLoadTime = (await get<number>('platformConfigUpdated')) ?? 0;
    let updatedRemoteConfig = false;

    if (Date.now() - lastLoadTime > MAX_AGE_MS) {
        console.info('Config never synced/stale, syncing now...');

        try {
            const url = `${PUSH_BASE_URL}/v1/web/config`;
            config = await authedFetchJson<PlatformConfig>(ctx, url);
            updatedRemoteConfig = true;
        } catch (e) {
            console.warn(e);
            // Noop (fallback to local)
        }
    }

    if (updatedRemoteConfig) {
        await set('platformConfig', config);
        await set('platformConfigUpdated', Date.now());
    }

    return config;
}
