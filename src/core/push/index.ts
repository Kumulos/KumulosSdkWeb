import { Context } from '..';
import SafariPushManager from './safari';
import W3cPushManager from './w3c';
import { getBrowserName } from '../utils';

export type PushSubscriptionState = 'subscribed' | 'unsubscribed' | 'blocked';

export enum TokenType {
    W3C = 3,
    SAFARI = 4
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
}

let manager: PushOpsManager;

const browser = getBrowserName();

if (browser === 'safari') {
    manager = new SafariPushManager();
} else {
    manager = new W3cPushManager();
}

export default function getPushOpsManager(): PushOpsManager {
    return manager;
}
