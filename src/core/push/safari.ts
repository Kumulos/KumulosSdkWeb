import { Context, EventType, PUSH_BASE_URL, trackEvent } from '..';
import { PushOpsManager, TokenType } from '.';
import { get, set } from '../storage';

import { PushSubscriptionState } from '../push';
import { cyrb53 } from '../utils';
import { loadConfig } from '../config';

export default class SafariPushManager implements PushOpsManager {
    async requestNotificationPermission(
        ctx: Context
    ): Promise<NotificationPermission> {
        const cfg = await loadConfig(ctx);
        const svcUrl = `${PUSH_BASE_URL}/safari/${ctx.apiKey}`;

        return new Promise((resolve, reject) => {
            if (!window.safari) {
                reject();
                return;
            }

            window.safari.pushNotification.requestPermission(
                svcUrl,
                cfg.safariPushId as string,
                {},
                perm => {
                    resolve(perm.permission);
                }
            );
        });
    }

    async pushRegister(ctx: Context): Promise<void> {
        const cfg = await loadConfig(ctx);
        const perm = window.safari?.pushNotification.permission(
            cfg.safariPushId as string
        );

        if (!perm || !perm.deviceToken) {
            return;
        }

        const existingTokenHash = await get<number>('pushTokenHash');
        const tokenHash = cyrb53(perm.deviceToken);

        if (existingTokenHash === tokenHash) {
            return;
        }

        await trackEvent(ctx, EventType.PUSH_REGISTERED, {
            type: TokenType.SAFARI,
            token: perm.deviceToken,
            bundleId: cfg.safariPushId
        });

        await set('pushTokenHash', tokenHash);
    }

    async requestPermissionAndRegisterForPush(
        ctx: Context
    ): Promise<PushSubscriptionState> {
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
        const cfg = await loadConfig(ctx);
        const perm = window.safari?.pushNotification.permission(
            cfg.safariPushId as string
        );

        if (!perm || perm?.permission === 'denied' || !perm?.deviceToken) {
            return 'blocked';
        }

        const existingTokenHash = await get<number>('pushTokenHash');
        const tokenHash = cyrb53(perm.deviceToken);

        if (existingTokenHash === tokenHash && perm.permission === 'granted') {
            return 'subscribed';
        }

        return 'unsubscribed';
    }

    async handleAutoResubscription(ctx: Context): Promise<void> {
        if (!ctx.autoResubscribe) {
            return;
        }

        const cfg = await loadConfig(ctx);
        const perm = window.safari?.pushNotification.permission(
            cfg.safariPushId as string
        );

        if (!perm || perm.permission !== 'granted' || !perm.deviceToken) {
            return;
        }

        const existingTokenHash = await get<number>('pushTokenHash');
        const tokenHash = cyrb53(perm.deviceToken);

        if (existingTokenHash === tokenHash) {
            return;
        }

        return this.pushRegister(ctx);
    }
}
