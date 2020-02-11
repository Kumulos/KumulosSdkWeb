import { Context } from '..';
export declare type PushSubscriptionState = 'subscribed' | 'unsubscribed' | 'blocked';
export declare enum TokenType {
    W3C = 3,
    SAFARI = 4
}
export interface PushOpsManager {
    requestNotificationPermission(ctx: Context): Promise<NotificationPermission>;
    pushRegister(ctx: Context): Promise<void>;
    requestPermissionAndRegisterForPush(ctx: Context): Promise<PushSubscriptionState>;
    getCurrentSubscriptionState(ctx: Context): Promise<PushSubscriptionState>;
    handleAutoResubscription(ctx: Context): Promise<void>;
}
export default function getPushOpsManager(ctx: Context): Promise<PushOpsManager>;
export declare function trackOpenFromQuery(ctx: Context): void;
