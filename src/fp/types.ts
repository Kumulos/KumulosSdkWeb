
type Message<T, D = never> =
    | {
        type: T;
    }
    | { type: T; data: D };

export enum HostMessageType {
    REQUEST_FINGERPRINT = 'REQUEST_FINGERPRINT',
}

export enum ClientMessageType {
    READY = 'READY',
    FINGERPRINT_GENERATED = 'FINGERPRINT_GENERATED',
}

export type FingerprintComponents = Record<string, string>;

export type HostMessage = Message<HostMessageType.REQUEST_FINGERPRINT>;

export type ClientMessage =
    | Message<ClientMessageType.READY>
    | Message<
        ClientMessageType.FINGERPRINT_GENERATED,
        { components: FingerprintComponents }
    >;
