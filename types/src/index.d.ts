import { Configuration, InstallId, PropsObject, UserId } from './core';
import { KumulosPushNotification } from './core/push';
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
    private onPushReceived?;
    private onPushOpened?;
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
    trackEvent(type: string, properties?: PropsObject): Promise<void>;
    pushRegister(): Promise<void>;
    setPushOpenedListener(onPushOpened: (payload: KumulosPushNotification) => void): void;
    setPushReceivedListener(onPushReceived: (payload: KumulosPushNotification) => void): void;
    private onWorkerMessage;
    private maybeFireOpenedHandler;
}
export {};
