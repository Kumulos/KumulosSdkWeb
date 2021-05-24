import { Component, h, createRef, RefObject } from 'preact';
import Clipboard from 'clipboard';

interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    linkUrl: string;
    onClick: () => void;
}

export default class DeeplinkButton extends Component<
    DeeplinkButtonProps,
    { ready: boolean }
> {
    private readonly btnRef: RefObject<HTMLButtonElement>;
    private clipboard?: Clipboard;

    constructor(props: DeeplinkButtonProps) {
        super(props);

        this.state = { ready: false };
        this.btnRef = createRef<HTMLButtonElement>();
    }

    componentDidMount() {
        this.clipboard = new Clipboard(this.btnRef.current!);
        this.clipboard.on('success', (e: ClipboardEvent) => {
            this.setState({ ready: true });
        });
    }

    onClick = () => this.state.ready && this.props.onClick();

    render() {
        const { style, class: cssClass, onClick, text, linkUrl } = this.props;

        return (
            <button
                ref={this.btnRef}
                type="button"
                style={style}
                class={cssClass}
                onClick={this.onClick}
                data-clipboard-text={linkUrl}
            >
                {text}
            </button>
        );
    }
}
