import { Configuration, PropsObject, UserId } from './core';
import { KumulosPushNotification } from './core/push';
interface KumulosConfig extends Configuration {
    onPushReceived?: (payload: KumulosPushNotification) => void;
    onPushOpened?: (payload: KumulosPushNotification) => void;
}
export default class Kumulos {
    private readonly config;
    private readonly context;
    private readonly serviceWorkerReg?;
    private readonly promptManager?;
    private readonly ddlManager?;
    private readonly rootFrame;
    constructor(config: KumulosConfig);
    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void>;
    trackEvent(type: string, properties?: PropsObject): Promise<void>;
    pushRegister(): Promise<void>;
    private onWorkerMessage;
    private maybeFireOpenedHandler;
}
export {};
