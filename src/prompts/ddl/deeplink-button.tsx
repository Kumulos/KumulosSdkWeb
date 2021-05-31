import { Component, h, createRef, RefObject } from 'preact';
import copy from 'clipboard-copy';

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
    onTouchEnd = () => {
        if (!copy(this.props.linkUrl)) {
            console.error(
                'Failed to copy canonical deep link url to clipboard'
            );
        }

        this.props.onAction();
    };

    render() {
        const { style, class: cssClass, text, linkUrl } = this.props;

        return (
            <button
                type="button"
                style={style}
                class={cssClass}
                onTouchEnd={this.onTouchEnd}
            >
                {text}
            </button>
        );
    }
}
