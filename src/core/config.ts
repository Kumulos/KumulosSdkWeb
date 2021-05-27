import {
    Context,
    PUSH_BASE_URL,
    PlatformConfig,
    DDLPromptConfig,
    PromptTypeName,
    ReminderTimeUnit,
    UiActionType,
    PromptPosition,
    DDL_BASE_URL
} from '.';
import { get, set } from './storage';

import { authedFetchJson } from './utils';

interface DDLConfigApiShape {
    config: DDLPromptConfig;
    storeUrl: string;
    canonicalUrl: string;
}

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

export async function loadDDLConfig(
    ctx: Context
): Promise<DDLPromptConfig[] | undefined> {
    // const apiResult = await loadConfig<DDLConfigApiShape[]>(
    //     `${DDL_BASE_URL}/v1/banners`,
    //     'ddl',
    //     ctx
    // );

    // if (!Array.isArray(apiResult)) {
    //     return;
    // }

    // return apiResult.map(r => ({
    //     ...r.config,
    //     storeUrl: r.storeUrl,
    //     canonicalLinkUrl: r.canonicalUrl
    // }));

    return loadDDLConfigTest(ctx);
}

export async function loadDDLConfigTest(
    ctx: Context
): Promise<DDLPromptConfig[]> {
    const config: DDLPromptConfig = {
        uuid: 'link1',
        type: PromptTypeName.BANNER_DL,
        labels: {
            bannerdl: {
                heading: 'Creek Cycles App',
                body: '20% off all purchases with code 20Appy',
                declineAction: '',
                acceptAction: '20% off'
            }
        },
        colors: {
            bannerdl: {
                bg: 'rgba(255,255,0,1)',
                fg: 'rgba(0,0,0,1)',
                declineActionFg: '',
                declineActionBg: '',
                acceptActionFg: 'rgba(255,255,255,1)',
                acceptActionBg: 'rgba(0,0,0,1)'
            }
        },
        position: PromptPosition.TOP,
        storeUrl:
            'https://play.google.com/store/apps/details?id=com.kumulos.companion',
        canonicalLinkUrl: 'https://reactnative.lnk.click/deep-1',
        imageUrl: '',
        trigger: {
            event: 'k.pageViewed',
            afterSeconds: 2
        },
        uiActions: {
            decline: {
                type: UiActionType.REMIND,
                delay: {
                    duration: 1,
                    timeUnit: ReminderTimeUnit.DAYS
                }
            }
        }
    };

    return Promise.resolve([config]);
}
