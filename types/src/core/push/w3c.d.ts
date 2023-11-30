import { Context } from '..';
import { PushOpsManager, PushSubscriptionState } from '.';
export default class W3cPushManager implements PushOpsManager {
    private pushRegisterLock;
    requestNotificationPermission(): Promise<NotificationPermission>;
    pushRegister(ctx: Context): Promise<void>;
    attemptPushRegister(ctx: Context): Promise<void>;
    private pushRegisterSync;
    private unsubscribeIfDifferentVapid;
    private subscribeAndMaybeTrackRegisteredEvent;
    pushUnregister(ctx: Context): Promise<void>;
    private trackAndCachePushRegisteredEvent;
    requestPermissionAndRegisterForPush(ctx: Context): Promise<import('.').PushSubscriptionState>;
    getCurrentSubscriptionState(ctx: Context): Promise<PushSubscriptionState>;
    handleAutoResubscription(ctx: Context): Promise<void>;
    isNativePromptShown(): Promise<boolean>;
}
