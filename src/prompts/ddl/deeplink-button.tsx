import { Component, h, createRef, RefObject } from 'preact';
import copy from 'clipboard-copy';

interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    onAction: () => void;
}

export default class DeeplinkButton extends Component<
    DeeplinkButtonProps,
    never
> {
    render() {
        const { style, class: cssClass, text } = this.props;

        return (
            <button
                type="button"
                style={style}
                class={cssClass}
                onTouchEnd={this.props.onAction}
            >
                {text}
            </button>
        );
    }
}
