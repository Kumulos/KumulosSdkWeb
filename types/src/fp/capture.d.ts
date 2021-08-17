import { Component } from 'preact';
export declare enum HostMessageType {
    REQUEST_FINGERPRINT = "REQUEST_FINGERPRINT"
}
export declare enum ClientMessageType {
    READY = "READY",
    FINGERPRINT_GENERATED = "FINGERPRINT_GENERATED"
}
export default class FpCapture extends Component<{}, never> {
    private iFrameRef;
    constructor();
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onMessage;
    private dispatchMessage;
    render(): import("preact").VNode<any>;
}
