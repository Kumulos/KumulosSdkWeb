import {
    Configuration,
    Context,
    InstallId,
    PropsObject,
    SDKFeature,
    UserId,
    assertConfigValid,
    associateUser,
    getInstallId,
    getUserId,
    setInstallId,
    trackEvent,
    trackInstallDetails
} from './core';
import { WorkerMessageType, isKumulosWorkerMessage } from './worker/messaging';
import {
    getMostRecentlyOpenedPushPayload,
    persistConfig,
    set
} from './core/storage';
import getPushOpsManager, {
    KumulosPushNotification,
    notificationFromPayload,
    trackOpenFromQuery
} from './core/push';
import { isMobile, registerServiceWorker } from './core/utils';

import DdlManager from './prompts/ddl/manager';
import { PromptManager } from './prompts';
import RootFrame from './core/root-frame';

interface KumulosConfig extends Configuration {
    onPushReceived?: (payload: KumulosPushNotification) => void;
    onPushOpened?: (payload: KumulosPushNotification) => void;
    installId: InstallId;
    userId?: UserId;
}

export default class Kumulos {
    private readonly config: KumulosConfig;
    private readonly context: Context;
    private readonly serviceWorkerReg?: Promise<ServiceWorkerRegistration>;
    private readonly promptManager?: PromptManager;
    private readonly ddlManager?: DdlManager;
    private readonly rootFrame: RootFrame;

    constructor(config: KumulosConfig) {
        assertConfigValid(config);

        this.config = config;
        this.context = new Context(config);

        this.maybePersistInstallIdAndUserId(config);
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
                    'DdlManager: DDL feature support only available on mobile devices.'
                );
                return;
            }

            this.ddlManager = new DdlManager(this.context, this.rootFrame);
        }
    }

    private async maybePersistInstallIdAndUserId(config: KumulosConfig) : Promise<void> {
        await getInstallId()
            .then(installId => {
                if (installId !== config.installId){
                    setInstallId(config.installId);
                }
            });

        if (config.userId === undefined){
            return Promise.resolve();
        }

        await getUserId()
            .then(userId => {
                if (userId !== config.userId){
                    associateUser(this.context, config.userId!);
                }
            })

        return Promise.resolve();
    }

    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void> {
        return associateUser(this.context, identifier, attributes);
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
