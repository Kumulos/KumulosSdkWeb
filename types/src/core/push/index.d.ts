import { Context } from '..';
export declare type PushSubscriptionState = 'subscribed' | 'unsubscribed' | 'blocked' | 'unregistered';
export declare enum TokenType {
    W3C = 3,
    SAFARI = 4
}
export declare enum MessageType {
    PUSH = 1
}
export interface PushOpsManager {
    requestNotificationPermission(ctx: Context): Promise<NotificationPermission>;
    pushRegister(ctx: Context): Promise<void>;
    attemptPushRegister(ctx: Context): Promise<void>;
    pushUnregister(ctx: Context): Promise<void>;
    requestPermissionAndRegisterForPush(ctx: Context): Promise<PushSubscriptionState>;
    getCurrentSubscriptionState(ctx: Context): Promise<PushSubscriptionState>;
    handleAutoResubscription(ctx: Context): Promise<void>;
    isNativePromptShown(): Promise<boolean>;
}
export interface KumulosPushNotification {
    id: number;
    title: string;
    message: string;
    url?: string;
    iconUrl?: string;
    imageUrl?: string;
    data: {
        [key: string]: any;
    };
}
export interface PushPayload {
    title: string;
    msg: string;
    data: {
        'k.message': {
            type: MessageType.PUSH;
            data: {
                id: number;
            };
        };
        [key: string]: any;
    };
    url: string | null;
    image: string | null;
    icon: string | null;
}
export default function getPushOpsManager(ctx: Context): PushOpsManager;
export declare function trackOpenFromQuery(ctx: Context): void;
export declare function registerServiceWorker(workerPath: string): Promise<void>;
export declare function notificationFromPayload(payload: PushPayload): KumulosPushNotification;
