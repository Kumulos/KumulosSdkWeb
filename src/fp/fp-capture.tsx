import { Component, h, createRef, RefObject } from 'preact';
import { createPortal } from 'preact/compat';
import {
    ClientMessageType,
    HostMessage,
    HostMessageType,
    FingerprintComponents
} from './types';
import { FP_CAPTURE_URL } from '../core';

interface FpCaptureProps {
    onCaptured: (components: FingerprintComponents) => void;
}

interface FpCaptureState {
    isReady: boolean;
}

export default class FpCapture extends Component<
    FpCaptureProps,
    FpCaptureState
> {
    private iFrameRef: RefObject<HTMLIFrameElement>;

    constructor(props: FpCaptureProps) {
        super(props);

        this.iFrameRef = createRef<HTMLIFrameElement>();

        this.state = {
            isReady: false
        };
    }

    componentDidMount() {
        window.addEventListener('message', this.onMessage);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage);
    }

    public requestFp() {
        console.info(`FpCapure: requesting fp capture`);
        this.dispatchMessage({ type: HostMessageType.REQUEST_FINGERPRINT });
    }

    public isReady() {
        return this.state.isReady;
    }

    private onMessage = (e: MessageEvent) => {
        console.info(
            `FpCapure: message ${e.data.type} received from ${e.origin}`
        );

        const message = e.data;

        if (e.origin !== FP_CAPTURE_URL) {
            return;
        }

        switch (message.type) {
            case ClientMessageType.READY:
                this.setState({ isReady: true });
                break;
            case ClientMessageType.FINGERPRINT_GENERATED:
                this.props.onCaptured(message.data.components);
                break;
        }
    };

    private dispatchMessage = (message: HostMessage) => {
        console.info(
            `FpCapure: dispatching ${message.type} message to capture frame`
        );

        const window = this.iFrameRef.current?.contentWindow;

        if (!window) {
            return;
        }

        window.postMessage(message, FP_CAPTURE_URL);
    };

    render() {
        return createPortal(
            <iframe
                ref={this.iFrameRef}
                src={FP_CAPTURE_URL}
                style={{ width: 0, height: 0 }}
            />,
            document.body
        );
    }
}
