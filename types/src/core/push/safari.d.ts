import { Context, PlatformConfig } from '..';
import { PushOpsManager } from '.';
import { PushSubscriptionState } from '../push';
export default class SafariPushManager implements PushOpsManager {
    private readonly cfg;
    private pushRegisterLock;
    constructor(cfg: PlatformConfig);
    requestNotificationPermission(ctx: Context): Promise<NotificationPermission>;
    pushRegister(ctx: Context): Promise<void>;
    private pushRegisterSync;
    requestPermissionAndRegisterForPush(ctx: Context): Promise<PushSubscriptionState>;
    getCurrentSubscriptionState(ctx: Context): Promise<PushSubscriptionState>;
    handleAutoResubscription(ctx: Context): Promise<void>;
    isNativePromptShown(): Promise<boolean>;
}
