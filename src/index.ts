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
    originalVisitorId: InstallId;
    customerId?: UserId;
    sdkVersion?: string;
}

export default class Kumulos {
    private readonly config: KumulosConfig;
    private readonly context: Context;
    private readonly rootFrame: RootFrame;

    private ddlManager?: DdlManager;

    public static async buildInstance(config: KumulosConfig) {
        assertConfigValid(config);

        const context = new Context(config);
        await Kumulos.maybePersistInstallIdAndUserId(context, config);

        const kumulos = new Kumulos(context, config);
        kumulos.initialize();

        return kumulos;
    }

    private constructor(context: Context, config: KumulosConfig) {
        this.context = context;
        this.config = config;
        this.rootFrame = new RootFrame();
    }

    private initialize() {
        persistConfig(this.config);
        trackInstallDetails(this.context, this.config.sdkVersion);
        if (this.context.hasFeature(SDKFeature.PUSH)) {
            this.initializePushFeature();
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

    private initializePushFeature() {
        trackOpenFromQuery(this.context);
        registerServiceWorker(this.context.serviceWorkerPath);

        new PromptManager(this, this.context, this.rootFrame);

        this.maybeAddMessageEventListenerToSW();
        this.maybeFireOpenedHandler();
    }

    private maybeAddMessageEventListenerToSW() {
        if (!('serviceWorker' in navigator)) {
            return;
        }

        navigator.serviceWorker.addEventListener(
            'message',
            this.onWorkerMessage
        );
    }

    private static async maybePersistInstallIdAndUserId(
        context: Context,
        config: KumulosConfig
    ): Promise<void> {
        await getInstallId().then(installId => {
            if (installId !== config.originalVisitorId) {
                return setInstallId(config.originalVisitorId);
            }
        });

        if (config.customerId === undefined) {
            return;
        }

        await getUserId().then(userId => {
            if (userId !== config.customerId) {
                return associateUser(context, config.customerId!);
            }
        });
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
