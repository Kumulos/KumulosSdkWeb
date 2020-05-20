import { Configuration, Context } from '../index';
import { PushPayload } from '../push';
export declare function get<T>(key: IDBValidKey): Promise<T>;
export declare function set<T extends any>(key: IDBValidKey, value: T): Promise<T>;
export declare function del(key: IDBValidKey): Promise<void>;
export declare function persistConfig(config: Configuration): Promise<Configuration>;
export declare function getContextFromStoredConfig(): Promise<Context | undefined>;
export declare function persistOpenedPushPayload(payload: PushPayload): Promise<PushPayload>;
export declare function getMostRecentlyOpenedPushPayload(): Promise<PushPayload | undefined>;
