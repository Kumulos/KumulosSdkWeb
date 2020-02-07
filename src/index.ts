import {
    Configuration,
    Context,
    InstallId,
    PropsObject,
    UserId,
    assertConfigValid,
    associateUser,
    clearUserAssociation,
    getInstallId,
    getUserId,
    trackEvent,
    trackInstallDetails
} from './core';

import { ChannelSubscriptionManager } from './core/channels';
import { PromptManager } from './prompts';
import getPushOpsManager from './core/push';
import { persistConfig } from './core/storage';
import { registerServiceWorker } from './core/utils';

export default class Kumulos {
    private readonly context: Context;
    private readonly serviceWorkerReg: Promise<ServiceWorkerRegistration>;
    private readonly promptManager: PromptManager;
    private channelSubscriptionManager?: ChannelSubscriptionManager;

    constructor(config: Configuration) {
        assertConfigValid(config);
        this.context = new Context(config);

        persistConfig(config);
        trackInstallDetails(this.context);

        this.serviceWorkerReg = registerServiceWorker(
            this.context.serviceWorkerPath
        );

        this.promptManager = new PromptManager(this, this.context);
    }

    getInstallId(): Promise<InstallId> {
        return getInstallId();
    }

    getCurrentUserIdentifier(): Promise<UserId> {
        return getUserId();
    }

    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void> {
        return associateUser(this.context, identifier, attributes);
    }

    clearUserAssociation(): Promise<void> {
        return clearUserAssociation(this.context);
    }

    trackEvent(type: string, properties?: PropsObject): Promise<void> {
        return trackEvent(this.context, type, properties).then(_ => void 0);
    }

    async pushRegister(): Promise<void> {
        const mgr = await getPushOpsManager(this.context);

        return mgr
            .requestNotificationPermission(this.context)
            .then(perm => {
                if ('granted' !== perm) {
                    return Promise.reject(
                        'Notification permission not granted'
                    );
                }
            })
            .then(() => {
                return mgr.pushRegister(this.context);
            });
    }

    getChannelSubscriptionManager(): ChannelSubscriptionManager {
        if (!this.channelSubscriptionManager) {
            this.channelSubscriptionManager = new ChannelSubscriptionManager(
                this.context
            );
        }

        return this.channelSubscriptionManager;
    }
}
