import { FingerprintComponents } from './types';
import { Component } from 'preact';
declare enum CaptureState {
    IDLE = 0,
    CAPTURING = 1
}
interface FpCaptureProps {
    onCaptured: (components: FingerprintComponents) => void;
}
interface FpCaptureState {
    isReady: boolean;
    captureState: CaptureState;
}
export default class FpCapture extends Component<FpCaptureProps, FpCaptureState> {
    private iFrameRef;
    constructor(props: FpCaptureProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillUpdate(_: FpCaptureProps, nextState: FpCaptureState): void;
    requestFp(): void;
    private onMessage;
    private dispatchMessage;
    render(): import("preact").VNode<any>;
}
export {};
