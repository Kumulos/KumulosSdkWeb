import { Context, EventType, Service, trackEvent } from '..';
import { PushOpsManager, TokenType } from '.';
import { cyrb53, defer } from '../utils';
import { del, get, set } from '../storage';

import { PushSubscriptionState } from '../push';

function hashToken(ctx: Context, token: string): number {
    return cyrb53(`${ctx.apiKey}:${token}`);
}

export default class SafariPushManager implements PushOpsManager {
    private readonly safariPushId?: string;
    private pushRegisterLock: Promise<void> = Promise.resolve();

    constructor(safariPushId?: string) {
        this.safariPushId = safariPushId;
    }
    requestNotificationPermission(
        ctx: Context
    ): Promise<NotificationPermission> {
        const svcUrl = `${ctx.urlForService(Service.PUSH)}/safari/${
            ctx.apiKey
        }`;

        const deferred = defer<NotificationPermission>();

        window.safari?.pushNotification.requestPermission(
            svcUrl,
            this.safariPushId as string,
            {},
            perm => {
                console.log(perm);
                deferred.resolve(perm.permission);
            }
        );

        return deferred.promise;
    }

    async pushRegister(ctx: Context): Promise<void> {
        const result = this.pushRegisterLock.then(() =>
            this.pushRegisterSync(ctx)
        );
        this.pushRegisterLock = result.catch(() => {});
        return result;
    }

    async attemptPushRegister(ctx: Context): Promise<void> {
        const unregisteredAt = await get<number>('unregisteredAt');

        if (unregisteredAt) {
            console.info('Was unregistered before, not calling push register');
            return;
        }

        return this.pushRegister(ctx);
    }

    async pushUnregister(ctx: Context): Promise<void> {
        const perm = window.safari?.pushNotification.permission(
            this.safariPushId as string
        );

        if (!perm || !perm.deviceToken) {
            return;
        }

        await trackEvent(ctx, EventType.PUSH_UNREGISTERED);

        await set<number>('unregisteredAt', Date.now());

        await del('pushTokenHash');
    }

    private async pushRegisterSync(ctx: Context): Promise<void> {
        await del('unregisteredAt');

        const perm = window.safari?.pushNotification.permission(
            this.safariPushId as string
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
            bundleId: this.safariPushId
        });

        await set('pushTokenHash', tokenHash);
    }

    async requestPermissionAndRegisterForPush(
        ctx: Context
    ): Promise<PushSubscriptionState> {
        const unregisteredAt = await get<number>('unregisteredAt');

        if (unregisteredAt) {
            return 'unregistered';
        }

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
        const perm = window.safari?.pushNotification.permission(
            this.safariPushId as string
        );

        if (!perm || perm?.permission === 'denied') {
            return 'blocked';
        }

        const unregisteredAt = await get<number>('unregisteredAt');

        if (unregisteredAt) {
            return 'unregistered';
        }

        const existingTokenHash = await get<number>('pushTokenHash');
        const tokenHash = hashToken(ctx, perm.deviceToken ?? '');

        if (existingTokenHash === tokenHash && perm.permission === 'granted') {
            return 'subscribed';
        }

        return 'unsubscribed';
    }

    async handleAutoResubscription(ctx: Context): Promise<void> {
        if (!ctx.autoResubscribe || !this.safariPushId) {
            return;
        }

        const perm = window.safari?.pushNotification.permission(
            this.safariPushId as string
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

        return this.attemptPushRegister(ctx);
    }

    async isNativePromptShown(): Promise<boolean> {
        return Promise.resolve(true);
    }
}
