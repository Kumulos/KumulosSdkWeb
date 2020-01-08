import { Context, EventType, trackEvent } from './index';
import { get, set } from './storage';

import { cyrb53 } from './utils';

export type PushSubscriptionState = 'subscribed' | 'unsubscribed' | 'blocked';

export function registerServiceWorker(
    path: string
): Promise<ServiceWorkerRegistration> {
    if (!('serviceWorker' in navigator)) {
        return Promise.reject(
            'ServiceWorker is not supported in this browser, aborting...'
        );
    }

    return navigator.serviceWorker.register(path).then(() => {
        return navigator.serviceWorker.ready;
    });
}

export async function requestNotificationPermission() {
    if (typeof Notification === 'undefined') {
        return Promise.reject(
            'Notifications are not supported in this browser, aborting...'
        );
    }

    try {
        const result = await Notification.requestPermission();

        return result;
    } catch (e) {
        console.error(e);
        return Promise.reject(e);
    }
}

export async function pushRegister(
    ctx: Context,
    workerReg: ServiceWorkerRegistration
): Promise<void> {
    if (!('PushManager' in window)) {
        return Promise.reject(
            'Push notifications are not supported in this browser'
        );
    }

    const sub = await workerReg.pushManager.subscribe({
        applicationServerKey: ctx.vapidPublicKey,
        userVisibleOnly: true
    });

    const endpoint = sub.endpoint;
    const endpointHash = cyrb53(endpoint);
    const expiry = sub.expirationTime;

    const existingEndpointHash = await get<number>('pushEndpointHash');
    const existingExpiry = await get<number | null | undefined>(
        'pushExpiresAt'
    );

    if (
        existingEndpointHash === endpointHash &&
        (!existingExpiry || existingExpiry > Date.now())
    ) {
        return;
    }

    await trackEvent(ctx, EventType.PUSH_REGISTERED, {
        type: 3,
        token: sub
    });

    await set('pushEndpointHash', endpointHash);
    await set('pushExpiresAt', expiry);
}

export async function requestPermissionAndRegisterForPush(
    ctx: Context
): Promise<PushSubscriptionState> {
    const perm = await requestNotificationPermission();

    switch (perm) {
        case 'default':
            return 'unsubscribed';
        case 'denied':
            return 'blocked';
    }

    const reg = await navigator.serviceWorker.getRegistration();

    if (!reg) {
        return Promise.reject();
    }

    try {
        await pushRegister(ctx, reg);
        return 'subscribed';
    } catch (e) {
        return 'unsubscribed';
    }
}

export async function getCurrentSubscriptionState(): Promise<PushSubscriptionState> {
    const perm = Notification.permission;

    if (perm === 'denied') {
        return 'blocked';
    }

    const reg = await navigator.serviceWorker.getRegistration();
    const sub = await reg?.pushManager.getSubscription();

    if (sub && perm === 'granted') {
        return 'subscribed';
    }

    return 'unsubscribed';
}
