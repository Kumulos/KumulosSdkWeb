import { Configuration, Context } from '../index';
import {
    Store,
    del as idbDel,
    get as idbGet,
    set as idbSet
} from './idb-keyval';

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
        apiKey: config.apiKey,
        secretKey: config.secretKey,
        vapidPublicKey: config.vapidPublicKey,
        serviceWorkerPath: config.serviceWorkerPath,
        autoResubscribe: config.autoResubscribe,
        pushPrompts: config.pushPrompts
    });
}

export function getContextFromStoredConfig(): Promise<Context | undefined> {
    return get<Configuration>('config').then(config =>
        config ? new Context(config) : undefined
    );
}
