import {
    Context,
    DdlPromptConfig,
    PlatformConfig,
    Service,
    getInstallId
} from '.';
import { get, set } from './storage';

import { authedFetchJson } from './utils';

const getCacheKeys = (key: string) => ({
    CONFIG_CACHE_KEY: `${key}Config`,
    CONFIG_CACHE_KEY_UPDATED: `${key}ConfigUpdated`
});

const MAX_CACHE_AGE_MS = 1 * 60 * 60 * 1000;

enum ConfigCacheType {
    PLATFORM = 'platform',
    DDL = 'ddl'
}

async function loadConfig<TConfigType>(
    url: string,
    cacheKey: string,
    ctx: Context
): Promise<TConfigType> {
    const cacheKeys = getCacheKeys(cacheKey);
    let config = await get<TConfigType>(cacheKeys.CONFIG_CACHE_KEY);

    const lastLoadTime =
        (await get<number>(cacheKeys.CONFIG_CACHE_KEY_UPDATED)) ?? 0;
    let updatedRemoteConfig = false;

    if (Date.now() - lastLoadTime > MAX_CACHE_AGE_MS) {
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
        await set(cacheKeys.CONFIG_CACHE_KEY, config);
        await set(cacheKeys.CONFIG_CACHE_KEY_UPDATED, Date.now());
    }

    return config;
}

export async function loadPlatformConfig(
    ctx: Context
): Promise<PlatformConfig> {
    return (
        (await loadConfig<PlatformConfig>(
            `${ctx.urlForService(Service.PUSH)}/v1/web/config`,
            ConfigCacheType.PLATFORM,
            ctx
        )) ?? {}
    );
}

export async function loadDdlConfig(
    ctx: Context
): Promise<DdlPromptConfig[] | undefined> {
    const webInstallId = await getInstallId();

    try {
        return await loadConfig<DdlPromptConfig[]>(
            `${ctx.urlForService(Service.DDL)}/v1/banners?webInstallId=${webInstallId}`,
            ConfigCacheType.DDL,
            ctx
        );
    } catch (err) {
        console.warn(
            `loadDdlConfig: failed to load Deferred DeepLink configuration`,
            err
        );
        // undefined return / no config
    }
}

export async function deleteDdlBannerConfigFromCache(
    bannerUuid: string
): Promise<void> {
    const cacheKeys = getCacheKeys(ConfigCacheType.DDL);

    let configs = await get<DdlPromptConfig[]>(cacheKeys.CONFIG_CACHE_KEY);

    if (!configs) {
        return;
    }

    configs = configs.filter(c => c.uuid !== bannerUuid);

    await set(cacheKeys.CONFIG_CACHE_KEY, configs);
}
