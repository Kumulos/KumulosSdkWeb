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
    Keys,
    assertKeys
} from './core';
import { WorkerMessageType, isKumulosWorkerMessage } from './worker/messaging';
import { getBrowserName, isMobile } from './core/utils';
import {
    getMostRecentlyOpenedPushPayload,
    persistConfig
} from './core/storage';
import getPushOpsManager, {
    KumulosPushNotification,
    notificationFromPayload,
    registerServiceWorker,
    trackOpenFromQuery
} from './core/push';

import DdlManager from './prompts/ddl/manager';
import { PromptManager } from './prompts';
import RootFrame from './core/root-frame';
import { loadPlatformAndKeysConfig } from './core/config';

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
        assertConfigValid(config, true);

        const platformConfigWithKeys = await loadPlatformAndKeysConfig(
            `https://push-${config.region}.kumulos.com/v2/web/config?tenantId=${config.tenantId}`
        );

        assertKeys(platformConfigWithKeys);
        const newManipulatedConfig = Kumulos.mapConfigAndKeysToConfig(
            config,
            platformConfigWithKeys.keys
        );

        const context = new Context(newManipulatedConfig);
        await Kumulos.maybePersistInstallIdAndUserId(
            context,
            newManipulatedConfig
        );
        const kumulos = new Kumulos(
            context,
            newManipulatedConfig,
            platformConfigWithKeys
        );

        kumulos.initialize();

        return kumulos;
    }

    private constructor(
        context: Context,
        config: KumulosConfig,
        platformConfig: PlatformConfig
    ) {
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
            this.initializeDDLFeature();
        }
    }

    private async initializePushFeature() {
        trackOpenFromQuery(this.context);
        registerServiceWorker(this.context.serviceWorkerPath);

        if (navigator.permissions) {
            this.observePermissionStatus();
        }

        this.promptManager = new PromptManager(
            this.context,
            this.rootFrame,
            this.platformConfig.prompts
        );

        this.maybeAddMessageEventListenerToSW();
        this.maybeFireOpenedHandler();
    }

    private async observePermissionStatus() {
        const permissionStatus = await navigator.permissions.query({
            name: 'notifications'
        });

        permissionStatus.addEventListener('change', async event => {
            const permissionStatus = event.target as PermissionStatus;
            const permissionState = permissionStatus.state;

            if (permissionState === 'granted') {
                const pushManager = await getPushOpsManager(this.context);

                pushManager.pushRegister(this.context);
            }
        });
    }

    private initializeDDLFeature() {
        if (!isMobile()) {
            console.info(
                'DdlManager: DDL feature support only available on mobile devices.'
            );
            return;
        }

        this.ddlManager = new DdlManager(this.context, this.rootFrame);
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

    private static mapConfigAndKeysToConfig(
        config: KumulosConfig,
        keys: Keys
    ): KumulosConfig {
        const newConfig: KumulosConfig = {
            region: config.region,
            apiKey: keys.apiKey,
            secretKey: keys.secretKey,
            vapidPublicKey: config.vapidPublicKey,
            serviceWorkerPath: config.serviceWorkerPath,
            autoResubscribe: config.autoResubscribe,
            features: config.features,
            onPushReceived: config.onPushReceived,
            onPushOpened: config.onPushOpened,
            originalVisitorId: config.originalVisitorId,
            customerId: config.customerId,
            sdkVersion: config.sdkVersion,
            tenantId: config.tenantId
        };

        return newConfig;
    }

    associateUser(identifier: UserId, attributes?: PropsObject): Promise<void> {
        return associateUser(this.context, identifier, attributes);
    }

    trackEvent(type: string, properties?: PropsObject): Promise<void> {
        return trackEvent(this.context, type, properties).then(_ => void 0);
    }

    async pushRegister(): Promise<void> {
        const pushManager = await getPushOpsManager(this.context);
        const permission = await pushManager.requestNotificationPermission(
            this.context
        );

        if (permission !== 'granted') {
            return Promise.reject('Notification permission not granted');
        }

        //TODO: The below code is a hack in place to avoid an issue with the onPermissionChange event not firing from Safari: https://bugs.webkit.org/show_bug.cgi?id=256201#c1
        // it also supports the legacy safari push notification implementation, which can not rely on the permission change event handler
        const browser = getBrowserName();

        if (browser === 'safari' || !navigator.permissions) {
            pushManager.pushRegister(this.context);
        }
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
