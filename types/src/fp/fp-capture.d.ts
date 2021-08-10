import { Component } from 'preact';
import { FingerprintComponents } from './types';
interface FpCaptureProps {
    onCaptured: (components: FingerprintComponents) => void;
}
interface FpCaptureState {
    isReady: boolean;
}
export default class FpCapture extends Component<FpCaptureProps, FpCaptureState> {
    private iFrameRef;
    constructor(props: FpCaptureProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    requestFp(): void;
    isReady(): boolean;
    private onMessage;
    private dispatchMessage;
    render(): import("preact").VNode<any>;
}
export {};
