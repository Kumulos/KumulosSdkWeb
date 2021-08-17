declare type Message<T, D = never> = {
    type: T;
} | {
    type: T;
    data: D;
};
export declare enum HostMessageType {
    REQUEST_FINGERPRINT = "REQUEST_FINGERPRINT"
}
export declare enum ClientMessageType {
    READY = "READY",
    FINGERPRINT_GENERATED = "FINGERPRINT_GENERATED"
}
export declare type FingerprintComponents = Record<string, string>;
export declare type HostMessage = Message<HostMessageType.REQUEST_FINGERPRINT>;
export declare type ClientMessage = Message<ClientMessageType.READY> | Message<ClientMessageType.FINGERPRINT_GENERATED, {
    components: FingerprintComponents;
}>;
export {};
