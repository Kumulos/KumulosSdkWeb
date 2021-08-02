import { Component } from 'preact';
interface FpCaptureProps {
    bannerUid: string;
    onCaptured: (bannerUid: string, components: any[]) => void;
}
export default class FpCapture extends Component<FpCaptureProps, never> {
    private iFrameRef;
    constructor(props: FpCaptureProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onMessage;
    private dispatchMessage;
    render(): import("preact").VNode<any>;
}
export {};
