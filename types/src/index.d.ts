import { Configuration, InstallId, PropsObject, UserId } from './core';
import { KumulosPushNotification } from './core/push';
interface KumulosConfig extends Configuration {
    onPushReceived?: (payload: KumulosPushNotification) => void;
    onPushOpened?: (payload: KumulosPushNotification) => void;
    originalVisitorId: InstallId;
    customerId?: UserId;
    sdkVersion?: string;
}
export default class Kumulos {
    private readonly config;
    private readonly context;
    private readonly rootFrame;
    private ddlManager?;
    static buildInstance(config: KumulosConfig): Promise<Kumulos>;
    private constructor();
    private initialize;
    private initializePushFeature;
    private maybeAddMessageEventListenerToSW;
    private static maybePersistInstallIdAndUserId;
    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void>;
    trackEvent(type: string, properties?: PropsObject): Promise<void>;
    pushRegister(): Promise<void>;
    private onWorkerMessage;
    private maybeFireOpenedHandler;
}
export {};
