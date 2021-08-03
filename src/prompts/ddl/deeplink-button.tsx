import { Component, h, Fragment } from 'preact';
import copy from 'clipboard-copy';
import { DdlUiActions, UiActionType, DdlBannerPromptConfig } from '../../core';

interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    promptActions: DdlUiActions;
    onAction: () => void;
}

export default class DeeplinkButton extends Component<
    DeeplinkButtonProps,
    never
    > {
    private handleAction = () => {
        const { uiActions: { accept } } = this.props.promptActions;

        switch (accept.type) {
            case UiActionType.DDL_OPEN_STORE:
                copy(accept.deepLinkUrl)
                    .then(this.props.onAction)
                    .catch((e) => {
                        console.error('Unable to capture deeplink url for deferred app pickup', e);
                    });
            case UiActionType.DDL_OPEN_DEEPLINK:
                this.props.onAction();
                break;
            default:
                return console.error(
                    `Handle DeepLink Action: unsupported accept action type '${accept['type']}'`
                );
        }
    }

    render() {
        const { style, class: cssClass, text } = this.props;

        return (
            <button
                type="button"
                style={style}
                class={cssClass}
                onTouchEnd={this.handleAction}
            >
                {text}
            </button>
        );
    }
}
