import { Context, EventType, PlatformConfig, Service, trackEvent } from '..';
import { PushOpsManager, TokenType } from '.';
import { cyrb53, defer } from '../utils';
import { get, set } from '../storage';

import { PushSubscriptionState } from '../push';

function hashToken(ctx: Context, token: string): number {
    return cyrb53(`${ctx.apiKey}:${token}`);
}

export default class SafariPushManager implements PushOpsManager {
    private readonly safariPushId?: string;
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
        // why again load platform config? does it change from the one received in the constructor?
        // Does the ctx or some internal thing change?
       // const cfg = await loadPlatformConfig(ctx);
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
        //const cfg = await loadPlatformConfig(ctx);
        const perm = window.safari?.pushNotification.permission(
            this.safariPushId as string
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
        if (!ctx.autoResubscribe || !this.safariPushId) {
            return;
        }

        //const cfg = await loadPlatformConfig(ctx);
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

        return this.pushRegister(ctx);
    }

    async isNativePromptShown(): Promise<boolean> {
        return Promise.resolve(true);
    }
}
