import {
    Context,
    EventType,
    PUSH_BASE_URL,
    PlatformConfig,
    trackEvent
} from '..';
import { PushOpsManager, TokenType } from '.';
import { cyrb53, defer } from '../utils';
import { get, set } from '../storage';

import { PushSubscriptionState } from '../push';
import { loadPlatformConfig } from '../config';

function hashToken(ctx: Context, token: string): number {
    return cyrb53(`${ctx.apiKey}:${token}`);
}

export default class SafariPushManager implements PushOpsManager {
    private readonly cfg: PlatformConfig;
    constructor(cfg: PlatformConfig) {
        this.cfg = cfg;
    }
    requestNotificationPermission(
        ctx: Context
    ): Promise<NotificationPermission> {
        const svcUrl = `${PUSH_BASE_URL}/safari/${ctx.apiKey}`;

        const deferred = defer<NotificationPermission>();

        window.safari?.pushNotification.requestPermission(
            svcUrl,
            this.cfg.safariPushId as string,
            {},
            perm => {
                console.log(perm);
                deferred.resolve(perm.permission);
            }
        );

        return deferred.promise;
    }

    async pushRegister(ctx: Context): Promise<void> {
        const cfg = await loadPlatformConfig(ctx);
        const perm = window.safari?.pushNotification.permission(
            cfg.safariPushId as string
        );

        if (!perm || !perm.deviceToken) {
            return;
        }

        const existingTokenHash = await get<number>('pushTokenHash');
        const tokenHash = hashToken(ctx, perm.deviceToken);

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
        const cfg = await loadPlatformConfig(ctx);
        const perm = window.safari?.pushNotification.permission(
            cfg.safariPushId as string
        );

        if (!perm || perm?.permission === 'denied') {
            return 'blocked';
        }

        const existingTokenHash = await get<number>('pushTokenHash');
        const tokenHash = hashToken(ctx, perm.deviceToken ?? '');

        if (existingTokenHash === tokenHash && perm.permission === 'granted') {
            return 'subscribed';
        }

        return 'unsubscribed';
    }

    async handleAutoResubscription(ctx: Context): Promise<void> {
        if (!ctx.autoResubscribe || !this.cfg.safariPushId) {
            return;
        }

        const cfg = await loadPlatformConfig(ctx);
        const perm = window.safari?.pushNotification.permission(
            cfg.safariPushId as string
        );

        if (!perm || perm.permission !== 'granted' || !perm.deviceToken) {
            console.info(
                'Auto-resubscription: permission not granted or no token, aborting'
            );
            return;
        }

        const existingTokenHash = await get<number>('pushTokenHash');
        const tokenHash = hashToken(ctx, perm.deviceToken);

        if (existingTokenHash === tokenHash) {
            console.info(
                'Auto-resubscription: already have a token hash for same token, aborting'
            );
            return;
        }

        return this.pushRegister(ctx);
    }
}
