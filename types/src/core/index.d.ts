export declare type InstallId = string;
export declare type UserId = string;
declare type Jsonish = string | number | boolean | null | {
    [key: string]: Jsonish;
} | {
    toJSON: () => any;
} | Jsonish[] | undefined;
export declare type PropsObject = {
    [key: string]: Jsonish;
};
export declare enum EventType {
    MESSAGE_DELIVERED = "k.message.delivered",
    MESSAGE_OPENED = "k.message.opened",
    PUSH_REGISTERED = "k.push.deviceRegistered",
    INSTALL_TRACKED = "k.stats.installTracked",
    USER_ASSOCIATED = "k.stats.userAssociated",
    USER_ASSOCIATION_CLEARED = "k.stats.userAssociationCleared",
    PAGE_VIEWED = "k.pageViewed"
}
export interface Configuration {
    apiKey: string;
    secretKey: string;
    vapidPublicKey: string;
    serviceWorkerPath?: string;
}
export declare class Context {
    readonly apiKey: string;
    readonly secretKey: string;
    readonly vapidPublicKey: string;
    readonly authHeader: string;
    readonly serviceWorkerPath: string;
    constructor(config: Configuration);
}
export declare function assertConfigValid(config: any): void;
export declare function getInstallId(): Promise<InstallId>;
export declare function getUserId(): Promise<UserId>;
export declare function associateUser(ctx: Context, id: UserId, attributes?: PropsObject): Promise<void>;
export declare function clearUserAssociation(ctx: Context): Promise<void>;
export declare function trackEvent(ctx: Context, type: string, properties?: PropsObject): Promise<Response>;
export declare function trackInstallDetails(ctx: Context): Promise<void>;
export {};
