import { Configuration, InstallId, PropsObject, UserId } from './core';
import { KumulosPushNotification } from './core/push';
interface KumulosConfig extends Configuration {
    onPushReceived?: (payload: KumulosPushNotification) => void;
    onPushOpened?: (payload: KumulosPushNotification) => void;
    originalVisitorId: InstallId;
    customerId?: UserId;
    sdkVersion: string;
}
export default class Kumulos {
    private readonly config;
    private readonly context;
    private readonly serviceWorkerReg?;
    private readonly promptManager?;
    private readonly ddlManager?;
    private readonly rootFrame;
    static buildInstance(config: KumulosConfig): Promise<Kumulos>;
    private constructor();
    private static maybePersistInstallIdAndUserId;
    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void>;
    trackEvent(type: string, properties?: PropsObject): Promise<void>;
    pushRegister(): Promise<void>;
    private onWorkerMessage;
    private maybeFireOpenedHandler;
}
export {};
