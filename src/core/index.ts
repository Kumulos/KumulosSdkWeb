import { performFetch, cyrb53, uuidv4 } from './utils';
import { del, get, set } from './storage';

const SDK_TYPE = 104;
// Backwards compatibility with optimove SDK not including version in Optimobile config
const DEFAULT_SDK_VERSION = '2.0.17';

export type InstallId = string;
export type UserId = string;

type Jsonish =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Jsonish }
    | { toJSON: () => any }
    | Jsonish[]
    | undefined;

export type PropsObject = { [key: string]: Jsonish };

type NestedPick<T, K1 extends keyof T, K2 extends keyof T[K1]> = {
    [P1 in K1]: {
        [P2 in K2]: T[K1][P2];
    };
};

//only system events
export enum EventType {
    MESSAGE_DELIVERED = 'k.message.delivered',
    MESSAGE_OPENED = 'k.message.opened',
    PUSH_REGISTERED = 'k.push.deviceRegistered',
    INSTALL_TRACKED = 'k.stats.installTracked',
    USER_ASSOCIATED = 'k.stats.userAssociated',
    USER_ASSOCIATION_CLEARED = 'k.stats.userAssociationCleared'
}

export enum PromptTypeName {
    BELL = 'bell',
    ALERT = 'alert',
    BANNER = 'banner',
    DDL_BANNER = 'ddl_banner'
}

// Note duplicate 'in' vs 'IN' due to misalignment in server config and published docs for manual config
export type FilterOperator = 'in' | 'IN' | '=' | '>' | '<' | '>=' | '<=';
export type FilterValue = number | boolean | string | string[];
export type PropFilter = [string, FilterOperator, FilterValue];

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
    links?: { label: string; url: string }[];
    colors: {
        shade: string;
        strip: string;
        text: string;
    };
}

type PromptSilentOverlayConfig = NestedPick<
    PromptOverlayConfig,
    'labels',
    'body'
> &
    NestedPick<PromptOverlayConfig, 'colors', 'text'>;

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

export enum UiActionType {
    DECLINE = 'decline',
    REMIND = 'remind',
    DDL_OPEN_STORE = 'openStore',
    DDL_OPEN_DEEPLINK = 'openDeeplink'
}

interface DeclinePromptAction {
    type: UiActionType.DECLINE;
}

interface RemindPromptAction {
    type: UiActionType.REMIND;
    delay: PromptReminderDelayConfig;
}

export type PromptAction =
    | ChannelSubAction
    | UserChannelSelectInlineAction
    | UserChannelSelectDialogAction;

export enum ReminderTimeUnit {
    HOURS = 'hours',
    DAYS = 'days'
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

export enum PromptPosition {
    TOP_LEFT = 'top-left',
    TOP_CENTER = 'top-center',
    TOP_RIGHT = 'top-right',
    CENTER_LEFT = 'center-left',
    CENTER = 'center',
    CENTER_RIGHT = 'center-right',
    BOTTOM_LEFT = 'bottom-left',
    BOTTOM_CENTER = 'bottom-center',
    BOTTOM_RIGHT = 'bottom-right',
    TOP = 'top',
    BOTTOM = 'bottom'
}

interface BasePromptConfig {
    uuid: string;
    type: PromptTypeName;
    trigger: PromptTrigger;
    position: PromptPosition;
    overlay?: PromptOverlayConfig;
    silentOverlay?: PromptSilentOverlayConfig;
    actions?: PromptAction[];
}

interface WithImageUrl {
    imageUrl?: string;
}

interface TooltipConfig {
    tooltip: {
        subscribe: string;
    };
}

type DialogLabelConfig = {
    heading: string;
    body: string;
    declineAction: string;
    acceptAction: string;
};

type NamedDialogLabelConfig<T extends PromptTypeName> = Record<
    T,
    DialogLabelConfig
>;

type DialogColorConfig = {
    fg: string;
    bg: string;
    declineActionFg: string;
    declineActionBg: string;
    acceptActionFg: string;
    acceptActionBg: string;
};

type NamedDialogColorConfig<T extends PromptTypeName> = Record<
    T,
    DialogColorConfig
>;

interface ToastMessage {
    thanksForSubscribing: string;
}

// BELL

type BellLabelConfig = ToastMessage & TooltipConfig;

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

// ALERT

type AlertLabelConfig = NamedDialogLabelConfig<PromptTypeName.ALERT> &
    ToastMessage;
type AlertColorConfig = NamedDialogColorConfig<PromptTypeName.ALERT>;

export interface AlertPromptConfig
    extends BasePromptConfig,
        WithImageUrl,
        PromptUiActions {
    type: PromptTypeName.ALERT;
    labels: AlertLabelConfig;
    colors: AlertColorConfig;
    position: PromptPosition.TOP | PromptPosition.CENTER;
    backgroundMask?: BackgroundMaskConfig;
}

// BANNER

type BannerLabelConfig = NamedDialogLabelConfig<PromptTypeName.BANNER> &
    ToastMessage;
type BannerColorConfig = NamedDialogColorConfig<PromptTypeName.BANNER>;

export interface BannerPromptConfig
    extends BasePromptConfig,
        WithImageUrl,
        PromptUiActions {
    type: PromptTypeName.BANNER;
    labels: BannerLabelConfig;
    colors: BannerColorConfig;
    position: PromptPosition.TOP | PromptPosition.BOTTOM;
    backgroundMask?: BackgroundMaskConfig;
}

// DDL BANNER

export interface AppRating {
    rating: number;
    ratingCount: number;
}

type DdlDialogColorConfig = DialogColorConfig & { ratingFg: string };

export type OpenStoreUiAction = {
    type: UiActionType.DDL_OPEN_STORE;
    url: string;
    deepLinkUrl: string;
};
type OpenDeepLinkUiAction = {
    type: UiActionType.DDL_OPEN_DEEPLINK;
    deepLinkUrl: string;
};

export type DdlUiActions = PromptUiActions & {
    uiActions: {
        accept: OpenStoreUiAction | OpenDeepLinkUiAction;
    };
};

export interface DdlBannerPromptConfig
    extends BasePromptConfig,
        WithImageUrl,
        DdlUiActions {
    type: PromptTypeName.DDL_BANNER;
    labels: DialogLabelConfig;
    colors: DdlDialogColorConfig;
    appRating?: AppRating;
}

export type PushPromptConfig =
    | BellPromptConfig
    | AlertPromptConfig
    | BannerPromptConfig;

export type DdlPromptConfig = DdlBannerPromptConfig;

export type PromptConfig = PushPromptConfig | DdlPromptConfig;
export type PromptConfigs<T extends PromptConfig> = Record<string, T>;

export interface PlatformConfig {
    publicKey: string;
    iconUrl?: string;
    prompts?: PromptConfigs<PushPromptConfig>;
    safariPushId?: string;
}

export interface Keys {
    apiKey: string;
    secretKey: string;
}

export type PlatformConfigAndKeys = PlatformConfig & {
    keys: Keys;
};

export enum SDKFeature {
    PUSH = 'push',
    DDL = 'ddl'
}

export enum Service {
    PUSH = 'push',
    DDL = 'ddl',
    EVENTS = 'events'
}

export interface Configuration {
    region: string;
    apiKey: string;
    secretKey: string;
    vapidPublicKey: string;
    serviceWorkerPath?: string;
    autoResubscribe?: boolean;
    features?: SDKFeature[];
    tenantId: number;
}

export type PromptReminder =
    | {
          declinedOn: number;
      }
    | 'suppressed';

type SdkEventType = 'eventTracked';
export type SdkEvent<T = any> = { type: SdkEventType; data: T };
type SdkEventHandler = (event: SdkEvent) => void;

export class Context {
    readonly apiKey: string;
    readonly secretKey: string;
    readonly vapidPublicKey: string;
    readonly authHeader: string;
    readonly serviceWorkerPath: string;
    readonly autoResubscribe: boolean;
    readonly features: SDKFeature[];
    readonly safariPushId?: string;

    private readonly subscribers: { [key: string]: SdkEventHandler[] };
    private readonly urlMap: { [key in Service]: string };

    constructor(config: Configuration) {
        this.apiKey = config.apiKey;
        this.secretKey = config.secretKey;
        this.vapidPublicKey = config.vapidPublicKey;
        this.authHeader = `Basic ${btoa(`${this.apiKey}:${this.secretKey}`)}`;
        this.serviceWorkerPath = config.serviceWorkerPath ?? '/worker.js';
        this.autoResubscribe = config.autoResubscribe ?? true;
        this.features = config.features ?? [SDKFeature.PUSH];

        this.subscribers = {};

        this.urlMap = {
            [Service.PUSH]: `https://push-${config.region}.kumulos.com`,
            [Service.EVENTS]: `https://events-${config.region}.kumulos.com`,
            [Service.DDL]: `https://links-${config.region}.kumulos.com`
        };
    }

    subscribe(event: SdkEventType, handler: SdkEventHandler) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }

        if (this.subscribers[event].indexOf(handler) > -1) {
            return;
        }

        this.subscribers[event].push(handler);
    }

    broadcast(event: SdkEventType, data: any) {
        if (!this.subscribers[event]) {
            return;
        }

        for (let i = 0; i < this.subscribers[event].length; ++i) {
            this.subscribers[event][i]({
                type: event,
                data
            });
        }
    }

    hasFeature(feature: SDKFeature) {
        return this.features.includes(feature);
    }

    urlForService(service: Service): string {
        return this.urlMap[service];
    }
}

export function assertConfigValid(
    config: any,
    tenantIdRequired: boolean = false
) {
    if (typeof config !== 'object') {
        throw 'Config must be an object';
    }

    const features =
        Array.isArray(config.features) && config.features.length
            ? config.features
            : undefined;

    if (tenantIdRequired && !config.tenantId) {
        throw 'tenantId is missing';
    }

    if (!features || features.includes(SDKFeature.PUSH)) {
        return assertPushConfigValid(config);
    }
}

export function assertKeys(platformConfigWithKeys: PlatformConfigAndKeys) {
    if (
        !platformConfigWithKeys.keys ||
        !platformConfigWithKeys.keys.apiKey ||
        !platformConfigWithKeys.keys.secretKey ||
        !platformConfigWithKeys.publicKey
    ) {
        throw 'Keys are missing';
    }
}

function assertPushConfigValid(config: any) {
    const requiredStringProps = ['region'];
    for (const prop of requiredStringProps) {
        if (typeof config[prop] !== 'string' || config[prop].length === 0) {
            throw `Required configuration key '${prop}' must be non-empty string`;
        }
    }

    if (
        config.serviceWorkerPath &&
        typeof config.serviceWorkerPath !== 'string' &&
        config.serviceWorkerPath.length === 0
    ) {
        throw "Optional configuration key 'serviceWorkerPath' must be non-empty string (if supplied)";
    }

    if (config.onPushReceived && typeof config.onPushReceived !== 'function') {
        throw "Optional configuration key 'onPushReceived' must be a function";
    }

    if (config.onPushOpened && typeof config.onPushOpened !== 'function') {
        throw "Optional configuration key 'onPushOpened' must be a function";
    }
}

let installIdPromise: Promise<InstallId> | undefined = undefined;

export function getInstallId(): Promise<InstallId> {
    if (installIdPromise) {
        return installIdPromise;
    }

    installIdPromise = get<InstallId | undefined>('installId').then(
        installId => {
            if (!installId) {
                return setInstallId(uuidv4());
            }

            return installId;
        }
    );

    return installIdPromise;
}

export function setInstallId(installId: InstallId): Promise<InstallId> {
    installIdPromise = set('installId', installId);

    return installIdPromise;
}

export function getUserId(): Promise<UserId> {
    return get<UserId | undefined>('userId').then(
        userId => userId ?? getInstallId()
    );
}

export async function associateUser(
    ctx: Context,
    id: UserId,
    attributes?: PropsObject
): Promise<void> {
    await set('userId', id);

    const props = {
        id,
        attributes
    };

    return trackEvent(ctx, EventType.USER_ASSOCIATED, props).then(_ => {});
}

export async function clearUserAssociation(ctx: Context): Promise<void> {
    const currentUserId = await getUserId();

    trackEvent(ctx, EventType.USER_ASSOCIATION_CLEARED, {
        oldUserIdentifier: currentUserId
    });

    return del('userId');
}

export type KumulosEvent = {
    type: string;
    uuid: string;
    timestamp: number;
    userId: string;
    data?: PropsObject;
};

export type EventPayload = KumulosEvent[];

export async function trackEvent(
    ctx: Context,
    type: string,
    properties?: PropsObject
): Promise<Response | void> {
    const installId = await getInstallId();
    const userId = await getUserId();

    const events: EventPayload = [
        {
            type,
            uuid: uuidv4(),
            timestamp: Date.now(),
            data: properties,
            userId
        }
    ];

    ctx.broadcast('eventTracked', events);

    if (!isSystemEvent(type)) {
        return Promise.resolve();
    }

    const url = `${ctx.urlForService(
        Service.EVENTS
    )}/v1/app-installs/${installId}/events`;
    return performFetch(url, ctx.authHeader, {
        method: 'POST',
        body: JSON.stringify(events)
    });
}

function isSystemEvent(type: string) {
    return (<any>Object).values(EventType).includes(type);
}

export async function trackInstallDetails(
    ctx: Context,
    optionalSdkVersion?: string
): Promise<void> {
    const sdkVersion = optionalSdkVersion || DEFAULT_SDK_VERSION;
    const payload = {
        app: {
            bundle: location.host,
            version: '0.0.0', // TODO read from context?
            target: 2 // TODO read from context?
        },
        sdk: {
            id: SDK_TYPE,
            version: sdkVersion
        },
        runtime: {
            id: 8,
            version: navigator.userAgent
        },
        os: {
            // Detection will be performed server-side from UA data
            id: 0,
            version: '0.0.0'
        },
        device: {
            // Will be handled on best-effort basis server-side
            name: navigator.userAgent,
            tz:
                typeof Intl !== 'undefined'
                    ? Intl.DateTimeFormat().resolvedOptions().timeZone || null
                    : null,
            isSimulator: false,
            locale: navigator.language
        }
    };

    let installId = '';
    try {
        installId = await getInstallId();
    } catch (e) {
        console.error('Failed to get install ID: ', e);
        return Promise.reject(e);
    }

    const hashParts = [
        // Include install ID in hash to ensure install tracked events are sent
        // to the server if install ID (original visitor ID) changes (e.g. if app
        // clears local storage keys and ID is regenerated)
        installId,
        sdkVersion,
        payload.app.bundle,
        payload.device.tz,
        payload.device.locale,
        payload.device.name
    ];

    const hash = cyrb53(hashParts.join('|'));

    try {
        const existingHash = await get<number>('detailsHash');

        if (existingHash === hash) {
            return Promise.resolve();
        }
    } catch (e) {
        return Promise.reject(e);
    }

    return trackEvent(ctx, EventType.INSTALL_TRACKED, payload)
        .then(() => set('detailsHash', hash))
        .then(() => void 0);
}

export interface Dimensions {
    width: number;
    height: number;
}

export interface Point {
    x: number;
    y: number;
}
