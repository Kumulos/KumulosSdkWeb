import { Context, EventType, trackEvent } from '..';
import { PushOpsManager, PushSubscriptionState, TokenType } from '.';
import { base64UrlEncode, cyrb53 } from '../utils';
import { get, set } from '../storage';

function hasSameKey(vapidKey: string, subscription: PushSubscription): boolean {
    const existingSubKey = subscription.options.applicationServerKey;

    if (!existingSubKey) {
        return false;
    }

    const subKey = base64UrlEncode(existingSubKey);

    return subKey === vapidKey;
}

export default class W3cPushManager implements PushOpsManager {
    async requestNotificationPermission(
        ctx: Context
    ): Promise<NotificationPermission> {
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

    async pushRegister(ctx: Context): Promise<void> {
        if (!('PushManager' in window)) {
            return Promise.reject(
                'Push notifications are not supported in this browser'
            );
        }

        const workerReg = await navigator.serviceWorker.getRegistration();

        if (!workerReg) {
            return Promise.reject('No service worker registration');
        }

        const existingSub = await workerReg.pushManager.getSubscription();

        if (existingSub && !hasSameKey(ctx.vapidPublicKey, existingSub)) {
            await existingSub?.unsubscribe();
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
            type: TokenType.W3C,
            token: sub
        });

        await set('pushEndpointHash', endpointHash);
        await set('pushExpiresAt', expiry);
    }

    async requestPermissionAndRegisterForPush(
        ctx: Context
    ): Promise<import('.').PushSubscriptionState> {
        const perm = await this.requestNotificationPermission(ctx);

        switch (perm) {
            case 'default':
                return 'unsubscribed';
            case 'denied':
                return 'blocked';
        }

        try {
            await this.pushRegister(ctx);
            return 'subscribed';
        } catch (e) {
            return 'unsubscribed';
        }
    }

    async getCurrentSubscriptionState(
        ctx: Context
    ): Promise<PushSubscriptionState> {
        const perm = Notification.permission;

        if (perm === 'denied') {
            return 'blocked';
        }

        const reg = await navigator.serviceWorker.getRegistration();
        const sub = await reg?.pushManager.getSubscription();

        if (sub && perm === 'granted' && hasSameKey(ctx.vapidPublicKey, sub)) {
            return 'subscribed';
        }

        return 'unsubscribed';
    }

    async handleAutoResubscription(ctx: Context): Promise<void> {
        if (!ctx.autoResubscribe) {
            return;
        }

        const perm = Notification.permission;

        if (perm !== 'granted') {
            return;
        }

        const existingEndpointHash = await get<number>('pushEndpointHash');
        const existingExpiry = await get<number | null | undefined>(
            'pushExpiresAt'
        );

        if (
            existingEndpointHash !== undefined &&
            (existingExpiry === null ||
                existingExpiry === undefined ||
                existingExpiry > Date.now())
        ) {
            return;
        }

        try {
            const reg = await navigator.serviceWorker.getRegistration();

            if (!reg) {
                console.warn('No worker, aborting auto-resubscription');
                return;
            }

            return this.pushRegister(ctx);
        } catch (e) {
            console.error(e);
        }
    }
}
