import { Component, h, createRef, RefObject } from 'preact';
import { createPortal } from 'preact/compat';
import { ClientMessage, ClientMessageType, HostMessage, HostMessageType } from './types';

interface FpCaptureProps {
    bannerUid: string;
    onCaptured: (bannerUid: string, components: any[]) => void;
}

export default class FpCapture extends Component<
    FpCaptureProps,
    never
    > {

    private iFrameRef: RefObject<HTMLIFrameElement>;

    constructor(props: FpCaptureProps) {
        super(props);

        this.iFrameRef = createRef<HTMLIFrameElement>();
    }

    componentDidMount() {
        window.addEventListener('message', this.onMessage);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage);
    }

    private onMessage = (e: MessageEvent) => {
        const message = e.data;

        switch (message.type) {
            case ClientMessageType.READY:
                this.dispatchMessage({ type: HostMessageType.REQUEST_FINGERPRINT });
                break;
            case ClientMessageType.FINGERPRINT_GENERATED:
                this.props.onCaptured(this.props.bannerUid, message.data.components)
                break;
        }

        console.log(message);
    }

    private dispatchMessage = (message: HostMessage) => {
        const window = this.iFrameRef.current?.contentWindow;

        if (!window) {
            return;
        }

        window.postMessage(message, '*');
    }

    render() {
        return createPortal(
            <iframe ref={this.iFrameRef} src="http://127.0.0.1:8080/" style={{ width: 0, height: 0 }} />,
            document.body
        );
    }
}
