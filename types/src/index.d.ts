import { Configuration, InstallId, PropsObject, UserId } from './core';
import { KumulosPushNotification, PushSubscriptionState } from './core/push';
interface KumulosConfig extends Configuration {
    originalVisitorId: InstallId;
    customerId?: UserId;
    sdkVersion?: string;
}
export default class Kumulos {
    private readonly config;
    private readonly platformConfig;
    private readonly context;
    private readonly rootFrame;
    private readonly pushManager;
    private onPushReceived?;
    private onPushOpened?;
    private onPushStateChanged?;
    private promptManager?;
    private ddlManager?;
    static buildInstance(config: KumulosConfig): Promise<Kumulos>;
    private constructor();
    private initialize;
    private initializePushFeature;
    private observePermissionStatus;
    private initializeDDLFeature;
    private maybeAddMessageEventListenerToSW;
    private static maybePersistInstallIdAndUserId;
    private static mapConfigAndKeysToConfig;
    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void>;
    signOutUser(): Promise<void>;
    trackEvent(type: string, properties?: PropsObject): Promise<void>;
    getPushSubscriptionStatus(subscriptionStateListener: (subscriptionState: PushSubscriptionState) => void): Promise<void>;
    pushRegister(): Promise<void>;
    pushUnregister(): Promise<void>;
    setPushOpenedListener(onPushOpened: (payload: KumulosPushNotification) => void): void;
    setPushReceivedListener(onPushReceived: (payload: KumulosPushNotification) => void): void;
    setPushSubscriptionStateListener(onPushStateChanged: (pushSubscriptionState: PushSubscriptionState) => void): Promise<void>;
    private onWorkerMessage;
    private maybeFireOpenedHandler;
}
export {};
