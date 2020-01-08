import { Configuration, InstallId, PropsObject, UserId } from './core';
import { ChannelSubscriptionManager } from './core/channels';
export default class Kumulos {
    private readonly context;
    private readonly serviceWorkerReg;
    private readonly promptManager;
    private channelSubscriptionManager?;
    constructor(config: Configuration);
    getInstallId(): Promise<InstallId>;
    getCurrentUserIdentifier(): Promise<UserId>;
    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void>;
    clearUserAssociation(): Promise<void>;
    trackEvent(type: string, properties?: PropsObject): Promise<void>;
    pushRegister(): Promise<void>;
    getChannelSubscriptionManager(): ChannelSubscriptionManager;
}
