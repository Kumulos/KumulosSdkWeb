import { Component, h, createRef, RefObject } from 'preact';
import Clipboard from 'clipboard';

interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    linkUrl: string;
    onAction: () => void;
}

export default class DeeplinkButton extends Component<
    DeeplinkButtonProps,
    never
> {
    private readonly btnRef: RefObject<HTMLButtonElement>;
    private clipboard?: Clipboard;

    constructor(props: DeeplinkButtonProps) {
        super(props);

        this.btnRef = createRef<HTMLButtonElement>();
    }

    onTouchEnd = () => {
        this.clipboard = new Clipboard(this.btnRef.current!);
        this.clipboard.on('success', e => this.props.onAction());
    };

    componentWillUnmount() {
        this.clipboard?.destroy();
    }

    render() {
        const { style, class: cssClass, text, linkUrl } = this.props;

        return (
            <button
                ref={this.btnRef}
                type="button"
                style={style}
                class={cssClass}
                onTouchEnd={this.onTouchEnd}
                data-clipboard-text={linkUrl}
            >
                {text}
            </button>
        );
    }
}
