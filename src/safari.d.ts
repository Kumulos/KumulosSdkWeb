type SafariNotificationPermission = 'default' | 'denied' | 'granted';

interface SafariRemoteNotificationPermission {
    deviceToken: string | null;
    permission: SafariNotificationPermission;
}

interface SafariRemoteNotification {
    permission(websitePushId: string): SafariRemoteNotificationPermission;
    requestPermission(
        webServiceUrl: string,
        websitePushId: string,
        userInfo: any,
        callback: (permissionData: SafariRemoteNotificationPermission) => void
    ): void;
}

interface Window {
    safari?: {
        pushNotification: SafariRemoteNotification;
    };
}
