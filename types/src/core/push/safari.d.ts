import { Context, PlatformConfig } from '..';
import { PushOpsManager } from '.';
import { PushSubscriptionState } from '../push';
export default class SafariPushManager implements PushOpsManager {
    private readonly cfg;
    constructor(cfg: PlatformConfig);
    requestNotificationPermission(ctx: Context): Promise<NotificationPermission>;
    pushRegister(ctx: Context): Promise<void>;
    requestPermissionAndRegisterForPush(ctx: Context): Promise<PushSubscriptionState>;
    getCurrentSubscriptionState(ctx: Context): Promise<PushSubscriptionState>;
    handleAutoResubscription(ctx: Context): Promise<void>;
    isNativePromptShown(): Promise<boolean>;
}
