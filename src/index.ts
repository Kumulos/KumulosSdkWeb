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
    trackInstallDetails,
    PlatformConfig,
    Keys
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
import { loadPlatformConfig } from './core/config';

interface KumulosConfig extends Configuration {
    onPushReceived?: (payload: KumulosPushNotification) => void;
    onPushOpened?: (payload: KumulosPushNotification) => void;
    originalVisitorId: InstallId;
    customerId?: UserId;
    sdkVersion?: string;
}

export default class Kumulos {
    private readonly config: KumulosConfig;
    private readonly platformConfig: PlatformConfig;
    private readonly context: Context;
    private readonly rootFrame: RootFrame;

    private promptManager?: PromptManager;
    private ddlManager?: DdlManager;

    public static async buildInstance(config: KumulosConfig) {
        assertConfigValid(config);

        const context = new Context(config);
        const platformConfigWithKeys = await loadPlatformConfig(context);
        await Kumulos.maybePersistInstallIdAndUserId(context, config);
        const kumulos = new Kumulos(context, Kumulos.mapConfigAndKeysToConfig(config, platformConfigWithKeys.keys), platformConfigWithKeys.platformConfig);

        kumulos.initialize();

        return kumulos;
    }

    private constructor(context: Context, config: KumulosConfig, platformConfig: PlatformConfig) {
        this.context = context;
        this.config = config;
        this.platformConfig = platformConfig;
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

    private async initializePushFeature() {
        trackOpenFromQuery(this.context);
        registerServiceWorker(this.context.serviceWorkerPath);

        this.promptManager = new PromptManager(
            this.context,
            this.rootFrame,
            this.platformConfig.publicKey, this.platformConfig.prompts
        );

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

    private static mapConfigAndKeysToConfig(config: KumulosConfig, keys: Keys) {
        const newConfig: KumulosConfig = {
            region: config.region,
            apiKey: keys.apiKey,
            secretKey: keys.secretKey,
            vapidPublicKey: config.vapidPublicKey,
            serviceWorkerPath: config.serviceWorkerPath,
            pushPrompts: config.pushPrompts,
            autoResubscribe: config.autoResubscribe,
            features: config.features,
            onPushReceived: config.onPushReceived,
            onPushOpened: config.onPushOpened,
            originalVisitorId: config.originalVisitorId,
            customerId: config.customerId,
            sdkVersion: config.sdkVersion,
            tenantId: config.tenantId
        } 

        return newConfig;
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
