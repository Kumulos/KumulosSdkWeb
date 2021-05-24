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
    trackInstallDetails,
    SDKFeature
} from './core';
import { WorkerMessageType, isKumulosWorkerMessage } from './worker/messaging';
import {
    getMostRecentlyOpenedPushPayload,
    persistConfig
} from './core/storage';
import getPushOpsManager, {
    KumulosPushNotification,
    notificationFromPayload,
    trackOpenFromQuery
} from './core/push';

import { ChannelSubscriptionManager } from './core/channels';
import { PromptManager } from './prompts';
import { registerServiceWorker, isMobile } from './core/utils';
import RootFrame from './core/root-frame';
import DDLManager from './ddl/manager';

interface KumulosConfig extends Configuration {
    onPushReceived?: (payload: KumulosPushNotification) => void;
    onPushOpened?: (payload: KumulosPushNotification) => void;
}

export default class Kumulos {
    private readonly config: KumulosConfig;
    private readonly context: Context;
    private readonly serviceWorkerReg?: Promise<ServiceWorkerRegistration>;
    private readonly promptManager?: PromptManager;
    private readonly ddlManager?: DDLManager;
    private channelSubscriptionManager?: ChannelSubscriptionManager;
    private readonly rootFrame: RootFrame;

    constructor(config: KumulosConfig) {
        assertConfigValid(config);

        this.config = config;
        this.context = new Context(config);

        persistConfig(config);
        trackInstallDetails(this.context);

        this.rootFrame = new RootFrame();

        if (this.context.hasFeature(SDKFeature.PUSH)) {
            trackOpenFromQuery(this.context);

            this.serviceWorkerReg = registerServiceWorker(
                this.context.serviceWorkerPath
            );

            this.promptManager = new PromptManager(
                this,
                this.context,
                this.rootFrame
            );

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.addEventListener(
                    'message',
                    this.onWorkerMessage
                );
            }

            this.maybeFireOpenedHandler();
        }

        if (this.context.hasFeature(SDKFeature.DDL)) {
            if (!isMobile()) {
                console.info(
                    'DDLManager: DDL feature support only available on mobile devices, aborting.'
                );
                return;
            }

            this.ddlManager = new DDLManager(
                this,
                this.context,
                this.rootFrame
            );
        }
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
                const push = notificationFromPayload(e.data.data);
                this.config.onPushReceived?.(push);

                break;
            }
        }
    };

    private async maybeFireOpenedHandler() {
        const payload = await getMostRecentlyOpenedPushPayload();
        if (!payload) {
            return;
        }

        const push = notificationFromPayload(payload);

        this.config.onPushOpened?.(push);
    }
}
