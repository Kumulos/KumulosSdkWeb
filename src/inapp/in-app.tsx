import { Component, h, RefObject, createRef } from 'preact';

import { InAppMessagePartForPreview } from './structs';

const IN_APP_RENDER_RUNTIME_URL = 'http://localhost:55367';

interface InAppDisplayProps {
    width: string;
    height: string;
    messagePart: InAppMessagePartForPreview;
    onMessageAction: (action: any) => void;
}

interface InAppDisplayState {
    ready: boolean;
}

export default class InAppDisplayProxy extends Component<
    InAppDisplayProps,
    InAppDisplayState
> {
    private frame: RefObject<HTMLIFrameElement>;

    constructor(props: InAppDisplayProps) {
        super(props);

        this.state = {
            ready: false
        };

        this.frame = createRef();
    }

    onMessage = (e: any) => {
        console.info(e);

        switch (e.data.type) {
            case 'READY':
                this.setState({
                    ready: true
                });
                break;
            case 'EXECUTE_ACTIONS':
                const actions = e.data.data?.actions ?? [];

                actions.forEach((action: any) => {
                    this.props.onMessageAction(action);
                });
                break;
        }
    };

    componentDidMount() {
        window.addEventListener('message', this.onMessage);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage);
    }

    componentDidUpdate(
        prevProps: InAppDisplayProps,
        prevState: InAppDisplayState
    ) {
        if (!this.state.ready) {
            return;
        }

        if (
            (prevState.ready !== this.state.ready && this.props.messagePart) ||
            prevProps.messagePart !== this.props.messagePart
        ) {
            this.requestRender();
        }
    }

    requestRender() {
        if (!this.frame.current || !this.props.messagePart) {
            return;
        }

        console.info('posting message', this.props.messagePart.data);

        this.frame.current.contentWindow?.postMessage(
            {
                type: 'PRESENT_MESSAGE',
                data: this.props.messagePart.data
            },
            '*'
        );
    }

    render() {
        return (
            <iframe
                ref={this.frame}
                src={IN_APP_RENDER_RUNTIME_URL}
                frameBorder="0"
                scrolling="no"
                className="full-height"
            />
        );
    }
}
