import { Component } from 'preact';
import { FingerprintComponents } from './types';
interface FpCaptureProps {
    requestCapture: boolean;
    onCaptured: (components: FingerprintComponents) => void;
}
interface FpCaptureState {
    isReady: boolean;
    captureRequested: boolean;
}
export default class FpCapture extends Component<FpCaptureProps, FpCaptureState> {
    private iFrameRef;
    constructor(props: FpCaptureProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: FpCaptureProps): void;
    private onMessage;
    private requestFingerprint;
    private dispatchMessage;
    render(): import("preact").VNode<any>;
}
export {};
