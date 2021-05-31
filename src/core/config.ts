import {
    Context,
    PUSH_BASE_URL,
    PlatformConfig,
    DdlPromptConfig,
    DDL_BASE_URL
} from '.';
import { get, set } from './storage';

import { authedFetchJson } from './utils';

async function loadConfig<TConfigType>(
    url: string,
    cacheKey: string,
    ctx: Context
): Promise<TConfigType> {
    const CONFIG_CACHE_KEY = `${cacheKey}Config`;
    const CONFIG_CACHE_KEY_UPDATED = `${cacheKey}ConfigUpdated`;
    const MAX_AGE_MS = 1 * 60 * 60 * 1000;

    let config = await get<TConfigType>(CONFIG_CACHE_KEY);

    const lastLoadTime = (await get<number>(CONFIG_CACHE_KEY_UPDATED)) ?? 0;
    let updatedRemoteConfig = false;

    if (Date.now() - lastLoadTime > MAX_AGE_MS) {
        console.info('Config never synced/stale, syncing now...');

        try {
            config = await authedFetchJson<TConfigType>(ctx, url);
            updatedRemoteConfig = true;
        } catch (e) {
            console.warn(e);
            // Noop (fallback to local)
        }
    }

    if (updatedRemoteConfig) {
        await set(CONFIG_CACHE_KEY, config);
        await set(CONFIG_CACHE_KEY_UPDATED, Date.now());
    }

    return config;
}

export async function loadPlatformConfig(
    ctx: Context
): Promise<PlatformConfig> {
    return (
        (await loadConfig<PlatformConfig>(
            `${PUSH_BASE_URL}/v1/web/config`,
            'platform',
            ctx
        )) ?? {}
    );
}

export async function loadDdlConfig(
    ctx: Context
): Promise<DdlPromptConfig[] | undefined> {
    return await loadConfig<DdlPromptConfig[]>(
        `${DDL_BASE_URL}/v1/banners`,
        'ddl',
        ctx
    );
}
