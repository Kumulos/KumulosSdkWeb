import { authedFetch, cyrb53, uuidv4 } from './utils';
import { del, get, set } from './storage';

const SDK_VERSION = '1.5.0';
const SDK_TYPE = 10;
const EVENTS_BASE_URL = 'https://events.kumulos.com';
export const PUSH_BASE_URL = 'https://push.kumulos.com';

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

export enum EventType {
    MESSAGE_DELIVERED = 'k.message.delivered',
    MESSAGE_OPENED = 'k.message.opened',
    PUSH_REGISTERED = 'k.push.deviceRegistered',
    INSTALL_TRACKED = 'k.stats.installTracked',
    USER_ASSOCIATED = 'k.stats.userAssociated',
    USER_ASSOCIATION_CLEARED = 'k.stats.userAssociationCleared',
    PAGE_VIEWED = 'k.pageViewed'
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

interface ChannelSubAction {
    type: 'subscribeToChannel';
    channelUuid: string;
}

type PromptAction = ChannelSubAction;

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

export type PromptConfig = BellPromptConfig;
export type PromptConfigs = { [key: string]: PromptConfig };

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

type SdkEventType = 'eventTracked';
export type SdkEvent<T = any> = { type: SdkEventType; data: T };
type SdkEventHandler = (event: SdkEvent) => void;

export class Context {
    readonly apiKey: string;
    readonly secretKey: string;
    readonly vapidPublicKey: string;
    readonly authHeader: string;
    readonly serviceWorkerPath: string;
    readonly pushPrompts: { [key: string]: PromptConfig } | 'auto';
    readonly autoResubscribe: boolean;

    private readonly subscribers: { [key: string]: SdkEventHandler[] };

    constructor(config: Configuration) {
        this.apiKey = config.apiKey;
        this.secretKey = config.secretKey;
        this.vapidPublicKey = config.vapidPublicKey;
        this.authHeader = `Basic ${btoa(`${this.apiKey}:${this.secretKey}`)}`;
        this.serviceWorkerPath = config.serviceWorkerPath ?? '/worker.js';
        this.pushPrompts = config.pushPrompts ?? 'auto';
        this.autoResubscribe = config.autoResubscribe ?? true;

        this.subscribers = {};
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
}

export function assertConfigValid(config: any) {
    if (typeof config !== 'object') {
        throw 'Config must be an object';
    }

    const requiredStringProps = ['apiKey', 'secretKey', 'vapidPublicKey'];
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
                return set('installId', uuidv4());
            }

            return installId;
        }
    );

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
): Promise<Response> {
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

    const url = `${EVENTS_BASE_URL}/v1/app-installs/${installId}/events`;

    ctx.broadcast('eventTracked', events);

    return authedFetch(ctx, url, {
        method: 'POST',
        body: JSON.stringify(events)
    });
}

export async function trackInstallDetails(ctx: Context): Promise<void> {
    const payload = {
        app: {
            bundle: location.host,
            version: '0.0.0', // TODO read from context?
            target: 2 // TODO read from context?
        },
        sdk: {
            id: SDK_TYPE,
            version: SDK_VERSION
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

    const hashParts = [
        SDK_VERSION,
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
