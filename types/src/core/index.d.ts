export declare const PUSH_BASE_URL = "https://push.kumulos.com";
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
export declare type FilterOperator = 'in' | 'IN' | '=' | '>' | '<' | '>=' | '<=';
export declare type FilterValue = number | boolean | string | string[];
export declare type PropFilter = [string, FilterOperator, FilterValue];
interface PromptTrigger {
    event: string;
    afterSeconds?: number;
    filters?: PropFilter[];
}
interface PromptOverlayConfig {
    iconUrl?: string;
    labels: {
        heading: string;
        body: string;
    };
    links?: {
        label: string;
        url: string;
    }[];
    colors: {
        shade: string;
        strip: string;
        text: string;
    };
}
interface ChannelSubAction {
    type: 'subscribeToChannel';
    channelUuid: string;
}
declare type PromptAction = ChannelSubAction;
interface BellPromptConfig {
    uuid: string;
    type: 'bell';
    trigger: PromptTrigger;
    labels?: {
        tooltip?: {
            subscribe?: string;
        };
        thanksForSubscribing?: string;
    };
    colors?: {
        bell?: {
            bg?: string;
            fg?: string;
        };
    };
    position: 'bottom-left' | 'bottom-right';
    overlay?: PromptOverlayConfig;
    actions?: PromptAction[];
}
export declare type PromptConfig = BellPromptConfig;
export declare type PromptConfigs = {
    [key: string]: PromptConfig;
};
export interface PlatformConfig {
    publicKey: string;
    prompts: PromptConfigs;
    safariPushId: string | null;
}
export interface Configuration {
    apiKey: string;
    secretKey: string;
    vapidPublicKey: string;
    serviceWorkerPath?: string;
    pushPrompts?: PromptConfigs | 'auto';
    autoResubscribe?: boolean;
}
declare type SdkEventType = 'eventTracked';
export declare type SdkEvent<T = any> = {
    type: SdkEventType;
    data: T;
};
declare type SdkEventHandler = (event: SdkEvent) => void;
export declare class Context {
    readonly apiKey: string;
    readonly secretKey: string;
    readonly vapidPublicKey: string;
    readonly authHeader: string;
    readonly serviceWorkerPath: string;
    readonly pushPrompts: {
        [key: string]: PromptConfig;
    } | 'auto';
    readonly autoResubscribe: boolean;
    private readonly subscribers;
    constructor(config: Configuration);
    subscribe(event: SdkEventType, handler: SdkEventHandler): void;
    broadcast(event: SdkEventType, data: any): void;
}
export declare function assertConfigValid(config: any): void;
export declare function getInstallId(): Promise<InstallId>;
export declare function getUserId(): Promise<UserId>;
export declare function associateUser(ctx: Context, id: UserId, attributes?: PropsObject): Promise<void>;
export declare function clearUserAssociation(ctx: Context): Promise<void>;
export declare type KumulosEvent = {
    type: string;
    uuid: string;
    timestamp: number;
    userId: string;
    data?: PropsObject;
};
export declare type EventPayload = KumulosEvent[];
export declare function trackEvent(ctx: Context, type: string, properties?: PropsObject): Promise<Response>;
export declare function trackInstallDetails(ctx: Context): Promise<void>;
export {};
