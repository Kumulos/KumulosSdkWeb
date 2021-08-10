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
    requestCapture: boolean;
    onCaptured: (components: FingerprintComponents) => void;
}

interface FpCaptureState {
    isReady: boolean;
    captureRequested: boolean;
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
            isReady: false,
            captureRequested: this.props.requestCapture
        };
    }

    componentDidMount() {
        window.addEventListener('message', this.onMessage);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage);
    }

    componentDidUpdate(prevProps: FpCaptureProps) {
        if (this.props.requestCapture === this.state.captureRequested) {
            return;
        }

        const captureRequested =
            this.props.requestCapture && !this.state.captureRequested;

        this.setState({ captureRequested }, this.requestFingerprint);
    }

    private onMessage = (e: MessageEvent) => {
        const message = e.data;

        if (e.origin !== FP_CAPTURE_URL) {
            return;
        }

        switch (message.type) {
            case ClientMessageType.READY:
                this.state.captureRequested && this.requestFingerprint();
                break;
            case ClientMessageType.FINGERPRINT_GENERATED:
                // this.props.onCaptured(message.data.components);
                break;
        }
    };

    private requestFingerprint = () => {
        this.dispatchMessage({ type: HostMessageType.REQUEST_FINGERPRINT });
    };

    private dispatchMessage = (message: HostMessage) => {
        const window = this.iFrameRef.current?.contentWindow;

        if (!window) {
            return;
        }

        window.postMessage(message, '*');
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
