import {
    ClientMessageType,
    FingerprintComponents,
    HostMessage,
    HostMessageType
} from './types';
import { Component, RefObject, createRef, h } from 'preact';

import { createPortal } from 'preact/compat';
const FP_CAPTURE_URL = 'https://pd.app.delivery';

enum CaptureState {
    IDLE,
    CAPTURING
}

interface FpCaptureProps {
    onCaptured: (components: FingerprintComponents) => void;
}

interface FpCaptureState {
    isReady: boolean;
    captureState: CaptureState;
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
            captureState: CaptureState.IDLE
        };
    }

    componentDidMount() {
        window.addEventListener('message', this.onMessage);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage);
    }

    componentWillUpdate(_: FpCaptureProps, nextState: FpCaptureState) {
        const { isReady, captureState } = nextState;
        const prevCaptureState = this.state.captureState;

        if (
            isReady &&
            captureState === CaptureState.CAPTURING &&
            prevCaptureState === CaptureState.IDLE
        ) {
            this.dispatchMessage({
                type: HostMessageType.REQUEST_FINGERPRINT
            });
        }
    }

    public requestFp() {
        console.info(`FpCapure: requesting fp capture`);

        if (this.state.captureState !== CaptureState.IDLE) {
            console.error('FpCapture.requestFp: captureState not IDLE');
            return;
        }

        this.setState({ captureState: CaptureState.CAPTURING });
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
                this.setState({ captureState: CaptureState.IDLE }, () => {
                    this.props.onCaptured(message.data.components);
                });
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
