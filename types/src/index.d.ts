import { Configuration, InstallId, PropsObject, UserId } from './core';
import { KumulosPushNotification } from './core/push';
import { ChannelSubscriptionManager } from './core/channels';
interface KumulosConfig extends Configuration {
    onPushReceived?: (payload: KumulosPushNotification) => void;
    onPushOpened?: (payload: KumulosPushNotification) => void;
}
export default class Kumulos {
    private readonly config;
    private readonly context;
    private readonly promptManager?;
    private readonly ddlManager?;
    private channelSubscriptionManager?;
    private readonly rootFrame;
    constructor(config: KumulosConfig);
    getInstallId(): Promise<InstallId>;
    getCurrentUserIdentifier(): Promise<UserId>;
    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void>;
    clearUserAssociation(): Promise<void>;
    trackEvent(type: string, properties?: PropsObject): Promise<void>;
    pushRegister(): Promise<void>;
    getChannelSubscriptionManager(): ChannelSubscriptionManager;
    private onWorkerMessage;
    private maybeFireOpenedHandler;
}
export {};
