import { Context, EventType, trackEvent } from '..';
import { PushOpsManager, PushSubscriptionState, TokenType } from '.';
import { base64UrlEncode, cyrb53, onDOMReady, getBrowserName } from '../utils';
import { get, set } from '../storage';

function hasSameKey(vapidKey: string, subscription: PushSubscription): boolean {
    const existingSubKey = subscription.options.applicationServerKey;

    if (!existingSubKey) {
        return false;
    }

    const subKey = base64UrlEncode(existingSubKey);

    return subKey === vapidKey;
}

async function getActiveServiceWorkerReg(): Promise<ServiceWorkerRegistration> {
    const workerReg = await navigator.serviceWorker.getRegistration();

    if (!workerReg) {
        return Promise.reject('No service worker registration');
    }

    return navigator.serviceWorker.ready;
}

function hashSubscription(ctx: Context, sub: PushSubscription): number {
    return cyrb53(`${ctx.apiKey}:${sub.endpoint}`);
}

const BLUR_EVENT_TIMEOUT_MILLIS = 2000;

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

        const workerReg = await getActiveServiceWorkerReg();
        const existingSub = await workerReg.pushManager.getSubscription();

        if (existingSub && !hasSameKey(ctx.vapidPublicKey, existingSub)) {
            await existingSub?.unsubscribe();
        }

        const sub = await workerReg.pushManager.subscribe({
            applicationServerKey: ctx.vapidPublicKey,
            userVisibleOnly: true
        });

        const endpointHash = hashSubscription(ctx, sub);
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

        const reg = await getActiveServiceWorkerReg();
        const sub = await reg?.pushManager.getSubscription();

        if (sub && perm === 'granted' && hasSameKey(ctx.vapidPublicKey, sub)) {
            return 'subscribed';
        }

        return 'unsubscribed';
    }

    async handleAutoResubscription(ctx: Context): Promise<void> {
        if (!ctx.autoResubscribe) {
            console.info('Auto-resubscribe: not enabled, aborting');
            return;
        }

        const perm = Notification.permission;

        if (perm !== 'granted') {
            console.info(
                `Auto-resubscribe: permission not granted, aborting: ${perm}`
            );
            return;
        }

        const existingEndpointHash = await get<number>('pushEndpointHash');
        const existingExpiry = await get<number | null | undefined>(
            'pushExpiresAt'
        );

        const workerReg = await getActiveServiceWorkerReg();
        const existingSub = await workerReg.pushManager.getSubscription();

        let existingSubHash = undefined;
        if (existingSub) {
            existingSubHash = hashSubscription(ctx, existingSub);
        }

        if (
            existingEndpointHash !== undefined &&
            existingEndpointHash === existingSubHash &&
            existingSub &&
            hasSameKey(ctx.vapidPublicKey, existingSub) &&
            (existingExpiry === null ||
                existingExpiry === undefined ||
                existingExpiry > Date.now())
        ) {
            console.info(
                'Auto-resubscribe: already have a non-expired endpoint hash for same sub, aborting'
            );
            return;
        }

        console.info('Auto-resubscribe: attempting resubscription');

        try {
            return this.pushRegister(ctx);
        } catch (e) {
            console.error(e);
        }
    }

    isNativePromptShown(): Promise<boolean> {
        const browserName = getBrowserName();

        if ('chrome' !== browserName) {
            return Promise.resolve(true);
        }

        return new Promise(resolve => {
            let blurEventFired = false;

            const checkForBlur = () => {
                if (blurEventFired) {
                    return;
                }

                clearTimeout(cancelBlurTimeout);
                window.removeEventListener('blur', checkForBlur);
                blurEventFired = true;

                resolve(true);
            };
            window.addEventListener('blur', checkForBlur);

            const cancelBlurTimeout = setTimeout(() => {
                window.removeEventListener('blur', checkForBlur);
                resolve(false);
            }, BLUR_EVENT_TIMEOUT_MILLIS);
        });
    }
}
