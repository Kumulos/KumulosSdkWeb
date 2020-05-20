import {
    Configuration,
    Context,
    InstallId,
    PropsObject,
    UserId,
    WorkerMessageType,
    assertConfigValid,
    associateUser,
    clearUserAssociation,
    getInstallId,
    getUserId,
    isKumulosWorkerMessage,
    trackEvent,
    trackInstallDetails
} from './core';
import getPushOpsManager, { trackOpenFromQuery } from './core/push';

import { ChannelSubscriptionManager } from './core/channels';
import { PromptManager } from './prompts';
import { persistConfig } from './core/storage';
import { registerServiceWorker } from './core/utils';

interface KumulosPushNotification {
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

interface KumulosConfig extends Configuration {
    onPushReceived?: (payload: KumulosPushNotification) => void;
    onPushOpened?: (payload: KumulosPushNotification) => void;
}

export default class Kumulos {
    private readonly config: KumulosConfig;
    private readonly context: Context;
    private readonly serviceWorkerReg: Promise<ServiceWorkerRegistration>;
    private readonly promptManager: PromptManager;
    private channelSubscriptionManager?: ChannelSubscriptionManager;

    constructor(config: KumulosConfig) {
        assertConfigValid(config);

        this.config = config;
        this.context = new Context(config);

        persistConfig(config);
        trackInstallDetails(this.context);
        trackOpenFromQuery(this.context);

        this.serviceWorkerReg = registerServiceWorker(
            this.context.serviceWorkerPath
        );

        this.promptManager = new PromptManager(this, this.context);

        navigator.serviceWorker.addEventListener(
            'message',
            this.onWorkerMessage
        );
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

    private onWorkerMessage = (e: MessageEvent) => {
        if (e.origin !== location.origin) {
            return;
        }

        if (!isKumulosWorkerMessage(e.data)) {
            return;
        }

        switch (e.data.type) {
            case WorkerMessageType.KPushReceived: {
                const payload = e.data.data;
                const userData = { ...payload.data };
                delete userData['k.message'];

                const push: KumulosPushNotification = {
                    id: payload.data['k.message'].data.id,
                    title: payload.title,
                    message: payload.msg,
                    data: userData,
                    url: payload.url ?? undefined,
                    iconUrl: payload.icon ?? undefined,
                    imageUrl: payload.image ?? undefined
                };

                this.config.onPushReceived?.(push);
                break;
            }
        }
    };
}
