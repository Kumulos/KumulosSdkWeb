import { Context, EventType, trackEvent } from '..';
import { getBrowserName, getFullUrl, parseQueryString } from '../utils';

import SafariPushManager from './safari';
import W3cPushManager from './w3c';
import { loadPlatformConfig } from '../config';

export type PushSubscriptionState = 'subscribed' | 'unsubscribed' | 'blocked';

export enum TokenType {
    W3C = 3,
    SAFARI = 4
}

export enum MessageType {
    PUSH = 1
}

export interface PushOpsManager {
    requestNotificationPermission(
        ctx: Context
    ): Promise<NotificationPermission>;
    pushRegister(ctx: Context): Promise<void>;
    requestPermissionAndRegisterForPush(
        ctx: Context
    ): Promise<PushSubscriptionState>;
    getCurrentSubscriptionState(ctx: Context): Promise<PushSubscriptionState>;
    handleAutoResubscription(ctx: Context): Promise<void>;
    isNativePromptShown(): Promise<boolean>;
}

export interface KumulosPushNotification {
    id: number;
    title: string;
    message: string;
    url?: string;
    iconUrl?: string;
    imageUrl?: string;
    data: {
        [key: string]: any;
    };
}

export interface PushPayload {
    title: string;
    msg: string;
    data: {
        'k.message': {
            type: MessageType.PUSH;
            data: {
                id: number;
            };
        };
        [key: string]: any;
    };
    url: string | null;
    image: string | null;
    icon: string | null;
}

let manager: Promise<PushOpsManager>;

export default function getPushOpsManager(
    ctx: Context
): Promise<PushOpsManager> {
    if (manager) {
        return manager;
    }

    const browser = getBrowserName();

    if (browser === 'safari') {
        manager = loadPlatformConfig(ctx).then(
            cfg => new SafariPushManager(cfg)
        );
    } else {
        manager = Promise.resolve(new W3cPushManager());
    }

    return manager;
}

export function trackOpenFromQuery(ctx: Context) {
    const browser = getBrowserName();

    if (browser !== 'safari') {
        return;
    }

    const params = parseQueryString();

    if (!params?.['knid']) {
        return;
    }

    trackEvent(ctx, EventType.MESSAGE_OPENED, {
        type: MessageType.PUSH,
        id: Number(params['knid'])
    });
}

export async function registerServiceWorker(workerPath: string) {
    if (!('serviceWorker' in navigator)) {
        console.error(
            'ServiceWorker is not supported in this browser, aborting...'
        );
        return;
    }

    const fullWorkerUrl = getFullUrl(workerPath);
    try {
        await navigator.serviceWorker.register(fullWorkerUrl);
    } catch (e) {
        console.error(e);
    }
}

export function notificationFromPayload(
    payload: PushPayload
): KumulosPushNotification {
    const { 'k.message': _, ...userData } = payload.data;

    const push: KumulosPushNotification = {
        id: payload.data['k.message'].data.id,
        title: payload.title,
        message: payload.msg,
        data: userData,
        url: payload.url ?? undefined,
        iconUrl: payload.icon ?? undefined,
        imageUrl: payload.image ?? undefined
    };
    return push;
}
