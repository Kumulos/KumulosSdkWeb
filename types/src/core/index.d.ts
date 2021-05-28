import { Channel } from './channels';
export declare const PUSH_BASE_URL = "https://push.kumulos.com";
export declare const DDL_BASE_URL = "https://links.kumulos.com";
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
export declare enum PromptTypeName {
    BELL = "bell",
    ALERT = "alert",
    BANNER = "banner",
    BANNER_DL = "bannerdl"
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
export interface ChannelDialogLabelsConfig {
    heading: string;
    confirmAction: string;
}
export interface ChannelDialogColorsConfig {
    bg: string;
    fg: string;
    confirmActionBg: string;
    confirmActionFg: string;
}
export interface ChannelDialogConfig {
    labels: ChannelDialogLabelsConfig;
    colors: ChannelDialogColorsConfig;
    position: PromptPosition;
}
export interface MultiChannelSelectionConfig {
    presentedUuids: string[] | 'all';
    checkedUuids: string[] | 'none' | 'all';
}
export interface UserChannelSelectInlineAction {
    type: 'userChannelSelectInline';
    channels: MultiChannelSelectionConfig;
}
export interface UserChannelSelectDialogAction {
    type: 'userChannelSelectDialog';
    channels: MultiChannelSelectionConfig;
    dialogConfig: ChannelDialogConfig;
}
export interface ChannelSubAction {
    type: 'subscribeToChannel';
    channelUuid: string;
}
export declare enum UiActionType {
    DECLINE = "decline",
    REMIND = "remind"
}
interface DeclinePromptAction {
    type: UiActionType.DECLINE;
}
interface RemindPromptAction {
    type: UiActionType.REMIND;
    delay: PromptReminderDelayConfig;
}
export declare type PromptAction = ChannelSubAction | UserChannelSelectInlineAction | UserChannelSelectDialogAction;
export declare enum ReminderTimeUnit {
    HOURS = "hours",
    DAYS = "days"
}
export interface PromptReminderDelayConfig {
    duration: number;
    timeUnit: ReminderTimeUnit;
}
export interface PromptUiActions {
    uiActions: {
        decline: DeclinePromptAction | RemindPromptAction;
    };
}
export interface BackgroundMaskConfig {
    colors: {
        bg: string;
    };
}
export declare enum PromptPosition {
    TOP_LEFT = "top-left",
    TOP_CENTER = "top-center",
    TOP_RIGHT = "top-right",
    CENTER_LEFT = "center-left",
    CENTER = "center",
    CENTER_RIGHT = "center-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_CENTER = "bottom-center",
    BOTTOM_RIGHT = "bottom-right",
    TOP = "top",
    BOTTOM = "bottom"
}
interface BasePromptConfig {
    uuid: string;
    type: PromptTypeName;
    trigger: PromptTrigger;
    position: PromptPosition;
    overlay?: PromptOverlayConfig;
    actions?: PromptAction[];
}
interface TooltipConfig {
    tooltip: {
        subscribe: string;
    };
}
declare type DialogLabelConfig<T extends PromptTypeName> = Record<T, {
    heading: string;
    body: string;
    declineAction: string;
    acceptAction: string;
}>;
declare type DialogColorConfig<T extends PromptTypeName> = Record<T, {
    fg: string;
    bg: string;
    declineActionFg: string;
    declineActionBg: string;
    acceptActionFg: string;
    acceptActionBg: string;
}>;
interface ToastMessage {
    thanksForSubscribing: string;
}
declare type BellLabelConfig = ToastMessage & TooltipConfig;
export interface BellColorConfig {
    bell: {
        fg: string;
        bg: string;
    };
}
export interface BellPromptConfig extends BasePromptConfig {
    type: PromptTypeName.BELL;
    labels?: BellLabelConfig;
    colors?: BellColorConfig;
    position: PromptPosition.BOTTOM_LEFT | PromptPosition.BOTTOM_RIGHT;
}
declare type AlertLabelConfig = DialogLabelConfig<PromptTypeName.ALERT> & ToastMessage;
declare type AlertColorConfig = DialogColorConfig<PromptTypeName.ALERT>;
export interface AlertPromptConfig extends BasePromptConfig, PromptUiActions {
    type: PromptTypeName.ALERT;
    labels: AlertLabelConfig;
    colors: AlertColorConfig;
    position: PromptPosition.TOP | PromptPosition.CENTER;
    backgroundMask?: BackgroundMaskConfig;
}
declare type BannerLabelConfig = DialogLabelConfig<PromptTypeName.BANNER> & ToastMessage;
declare type BannerColorConfig = DialogColorConfig<PromptTypeName.BANNER>;
export interface BannerPromptConfig extends BasePromptConfig, PromptUiActions {
    type: PromptTypeName.BANNER;
    labels: BannerLabelConfig;
    colors: BannerColorConfig;
    position: PromptPosition.TOP | PromptPosition.BOTTOM;
    backgroundMask?: BackgroundMaskConfig;
}
declare type DDLBannerLabelConfig = DialogLabelConfig<PromptTypeName.BANNER_DL>;
declare type DDLBannerColorConfig = DialogColorConfig<PromptTypeName.BANNER_DL>;
export interface DDLBannerPromptConfig extends BasePromptConfig, PromptUiActions {
    type: PromptTypeName.BANNER_DL;
    labels: DDLBannerLabelConfig;
    colors: DDLBannerColorConfig;
    imageUrl: string;
    storeUrl: string;
    canonicalLinkUrl: string;
}
export declare type PushPromptConfig = BellPromptConfig | AlertPromptConfig | BannerPromptConfig;
export declare type DDLPromptConfig = DDLBannerPromptConfig;
export declare type PromptConfig = PushPromptConfig | DDLPromptConfig;
export declare type PromptConfigs<T extends PromptConfig> = Record<string, T>;
export interface PlatformConfig {
    publicKey?: string;
    iconUrl?: string;
    prompts?: PromptConfigs<PushPromptConfig>;
    safariPushId?: string | null;
}
export declare enum SDKFeature {
    PUSH = "push",
    DDL = "ddl"
}
export interface Configuration {
    apiKey: string;
    secretKey: string;
    vapidPublicKey?: string;
    serviceWorkerPath?: string;
    pushPrompts: PromptConfigs<PushPromptConfig> | 'auto';
    autoResubscribe?: boolean;
    features?: SDKFeature[];
}
export declare type PromptReminder = {
    declinedOn: number;
} | 'suppressed';
declare type SdkEventType = 'eventTracked';
export declare type SdkEvent<T = any> = {
    type: SdkEventType;
    data: T;
};
declare type SdkEventHandler = (event: SdkEvent) => void;
export declare class Context {
    readonly apiKey: string;
    readonly secretKey: string;
    readonly vapidPublicKey?: string;
    readonly authHeader: string;
    readonly serviceWorkerPath: string;
    readonly pushPrompts: PromptConfigs<PushPromptConfig> | 'auto';
    readonly autoResubscribe: boolean;
    readonly features?: SDKFeature[];
    private readonly subscribers;
    constructor(config: Configuration);
    subscribe(event: SdkEventType, handler: SdkEventHandler): void;
    broadcast(event: SdkEventType, data: any): void;
    hasFeature(feature: SDKFeature): boolean;
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
export interface ChannelListItem {
    channel: Channel;
    checked: boolean;
}
export declare function getChannelDialogChannels(allChannels: Channel[], selectionConfig: MultiChannelSelectionConfig): ChannelListItem[];
export {};
