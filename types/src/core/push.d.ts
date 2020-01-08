import { Context } from './index';
export declare type PushSubscriptionState = 'subscribed' | 'unsubscribed' | 'blocked';
export declare function registerServiceWorker(path: string): Promise<ServiceWorkerRegistration>;
export declare function requestNotificationPermission(): Promise<NotificationPermission>;
export declare function pushRegister(ctx: Context, workerReg: ServiceWorkerRegistration): Promise<void>;
export declare function requestPermissionAndRegisterForPush(ctx: Context): Promise<PushSubscriptionState>;
export declare function getCurrentSubscriptionState(): Promise<PushSubscriptionState>;
