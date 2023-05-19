import {
    Configuration,
    Context,
    EventType,
    assertConfigValid,
    trackEvent
} from '../core';
import {
    getContextFromStoredConfig,
    persistConfig,
    persistOpenedPushPayload
} from '../core/storage';

import { WorkerMessageType } from './messaging';
import { broadcastFromWorker } from './utils';
import getPushOpsManager from '../core/push';

// Little bit of a hack, see: https://github.com/Microsoft/TypeScript/issues/14877#issuecomment-340279293
declare var self: ServiceWorkerGlobalScope & { KUMULOS_INIT?: Configuration };

function withContext(fn: (ctx: Context) => any): Promise<void> {
    return getContextFromStoredConfig().then(ctx => {
        if (ctx) {
            return fn(ctx);
        }

        if (!self.KUMULOS_INIT) {
            return;
        }

        assertConfigValid(self.KUMULOS_INIT);

        return persistConfig(self.KUMULOS_INIT).then(config => {
            ctx = new Context(config);
            return fn(ctx);
        });
    });
}

// See https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
self.addEventListener('install', () => {
    // MDN: The promise that skipWaiting() returns can be safely ignored
    self.skipWaiting();
});

// See https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => console.log('fetch'));

self.addEventListener('push', event => {
    const workCompleted = withContext(ctx => {
        if (!event.data) {
            return;
        }

        const payload = event.data.json();

        if (!payload) {
            return;
        }

        const data = payload.data;

        if (!data || !data['k.message']) {
            return;
        }

        const messageData = data['k.message'];
        const deliveryTracked = trackEvent(ctx, EventType.MESSAGE_DELIVERED, {
            type: messageData.type,
            id: messageData.data.id
        });

        const receivedEventBroadcast = broadcastFromWorker({
            type: WorkerMessageType.KPushReceived,
            data: payload
        });

        const notificationShown = self.registration.showNotification(
            payload.title,
            {
                body: payload.msg,
                data: payload,
                icon: payload.icon ?? undefined,
                image: payload.image ?? undefined,
                requireInteraction: true
            }
        );

        return Promise.all([
            notificationShown,
            receivedEventBroadcast,
            deliveryTracked
        ]);
    });

    event.waitUntil(workCompleted);
});

self.addEventListener('notificationclick', event => {
    const workCompleted = withContext(ctx => {
        const notification = event.notification;

        const payload = notification.data;

        if (!payload) {
            return;
        }

        const data = payload.data;

        if (!data || !data['k.message']) {
            return;
        }

        notification.close();

        const messageData = data['k.message'];
        const openTracked = trackEvent(ctx, EventType.MESSAGE_OPENED, {
            type: messageData.type,
            id: messageData.data.id
        });

        const url = payload.url ?? '/';

        const payloadPersisted = persistOpenedPushPayload(payload);

        return payloadPersisted.then(() => {
            const windowOpened = self.clients.openWindow(url);

            return Promise.all([windowOpened, openTracked]);
        });
    });

    event.waitUntil(workCompleted);
});

self.addEventListener('pushsubscriptionchange', event => {
    if (Notification.permission !== 'granted') {
        // TODO mark unsubscribed?
        return;
    }

    const workCompleted = withContext(ctx =>
        getPushOpsManager(ctx).then(mgr => mgr.pushRegister(ctx))
    );

    event.waitUntil(workCompleted);
});
