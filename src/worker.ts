import { Context, EventType, trackEvent } from './core';

import { getContextFromStoredConfig } from './core/storage';
import getPushOpsManager from './core/push';

// Little bit of a hack, see: https://github.com/Microsoft/TypeScript/issues/14877#issuecomment-340279293
declare var self: ServiceWorkerGlobalScope;

function withContext(fn: (ctx: Context) => any): Promise<void> {
    return getContextFromStoredConfig().then(ctx =>
        ctx ? fn(ctx) : undefined
    );
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

        return Promise.all([deliveryTracked, notificationShown]);
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

        const windowOpened = self.clients.openWindow(url);

        return Promise.all([openTracked, windowOpened]);
    });

    event.waitUntil(workCompleted);
});

self.addEventListener('pushsubscriptionchange', event => {
    if (Notification.permission !== 'granted') {
        // TODO mark unsubscribed?
        return;
    }

    const workCompleted = withContext(ctx => {
        const mgr = getPushOpsManager();
        return mgr.pushRegister(ctx);
    });

    event.waitUntil(workCompleted);
});
