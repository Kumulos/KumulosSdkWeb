import {
    Configuration,
    Context,
    DdlPromptConfig,
    PromptReminder
} from '../index';
import {
    Store,
    del as idbDel,
    get as idbGet,
    set as idbSet
} from './idb-keyval';

import { PushPayload } from '../push';

const store = new Store('kumulos', 'default');

export function get<T>(key: IDBValidKey): Promise<T> {
    return idbGet(key, store);
}

export function set<T extends any>(key: IDBValidKey, value: T): Promise<T> {
    return idbSet(key, value, store).then(() => value);
}

export function del(key: IDBValidKey): Promise<void> {
    return idbDel(key, store);
}

export function persistConfig(config: Configuration): Promise<Configuration> {
    return set<Configuration>('config', {
        region: config.region,
        apiKey: config.apiKey,
        secretKey: config.secretKey,
        vapidPublicKey: config.vapidPublicKey,
        serviceWorkerPath: config.serviceWorkerPath,
        autoResubscribe: config.autoResubscribe,
        pushPrompts: config.pushPrompts,
        tenantId: config.tenantId
    });
}

export function persistDDLConfig(
    config: DdlPromptConfig[]
): Promise<DdlPromptConfig[]> {
    return set<DdlPromptConfig[]>('ddlconfig', config);
}

export function persistPromptReminder(
    promptUuid: string,
    reminder: PromptReminder
) {
    return set(`reminder.${promptUuid}`, reminder);
}

export async function getPromptReminder(
    promptUuid: string
): Promise<PromptReminder | undefined> {
    return await get<PromptReminder | undefined>(`reminder.${promptUuid}`);
}

export function getContextFromStoredConfig(): Promise<Context | undefined> {
    return get<Configuration>('config').then(config =>
        config ? new Context(config) : undefined
    );
}

export function persistOpenedPushPayload(
    payload: PushPayload
): Promise<PushPayload> {
    return set('mostRecentOpenedPushPayload', payload);
}

export async function getMostRecentlyOpenedPushPayload(): Promise<
    PushPayload | undefined
> {
    const payload = await get<PushPayload>('mostRecentOpenedPushPayload');

    await del('mostRecentOpenedPushPayload');

    return payload ?? undefined;
}
