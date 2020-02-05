import { Context } from '..';
import { PushOpsManager, PushSubscriptionState } from '.';
export default class W3cPushManager implements PushOpsManager {
    requestNotificationPermission(ctx: Context): Promise<NotificationPermission>;
    pushRegister(ctx: Context): Promise<void>;
    requestPermissionAndRegisterForPush(ctx: Context): Promise<import('.').PushSubscriptionState>;
    getCurrentSubscriptionState(ctx: Context): Promise<PushSubscriptionState>;
    handleAutoResubscription(ctx: Context): Promise<void>;
}
