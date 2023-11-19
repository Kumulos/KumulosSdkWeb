import { Context } from '..';
import { PushOpsManager } from '.';
import { PushSubscriptionState } from '../push';
export default class SafariPushManager implements PushOpsManager {
    private readonly safariPushId?;
    private pushRegisterLock;
    constructor(safariPushId?: string);
    requestNotificationPermission(ctx: Context): Promise<NotificationPermission>;
    pushRegister(ctx: Context): Promise<void>;
    pushUnregister(ctx: Context): Promise<void>;
    private pushRegisterSync;
    requestPermissionAndRegisterForPush(ctx: Context): Promise<PushSubscriptionState>;
    getCurrentSubscriptionState(ctx: Context): Promise<PushSubscriptionState>;
    handleAutoResubscription(ctx: Context): Promise<void>;
    isNativePromptShown(): Promise<boolean>;
}
