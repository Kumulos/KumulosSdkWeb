import {
    AlertPromptConfig,
    BannerPromptConfig,
    PromptTypeName
} from '../../core';
import { Component, h } from 'preact';

import { PromptUiProps } from '../ui';

const styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};

export class Dialog extends Component<
    PromptUiProps<AlertPromptConfig | BannerPromptConfig>
> {
    constructor(props: PromptUiProps<AlertPromptConfig | BannerPromptConfig>) {
        super(props);
    }

    onRequestNativePrompt = () => {
        this.props.onPromptAccepted(
            this.props.config,
        );
    };

    onRequestCancel = () => {
        this.props.onPromptDeclined(this.props.config);
    };

    render() {
        const config = this.props.config;
        const classes = `kumulos-prompt kumulos-prompt-${this.props.promptManagerState} kumulos-${config.type}-container kumulos-prompt-position-${config.position}`;

        const { heading, body, declineAction, acceptAction } =
            config.type === PromptTypeName.ALERT
                ? config.labels.alert
                : config.labels.banner;

        const {
            bg,
            fg,
            acceptActionBg,
            acceptActionFg,
            declineActionBg,
            declineActionFg
        } =
            config.type === PromptTypeName.ALERT
                ? config.colors.alert
                : config.colors.banner;

        const containerStyle = {
            backgroundColor: bg,
            color: fg
        };

        const declineActionStyle = {
            backgroundColor: declineActionBg,
            color: declineActionFg
        };

        const acceptActionStyle = {
            backgroundColor: acceptActionBg,
            color: acceptActionFg
        };

        const iconStyle = {
            ...styles.iconStyle,
            backgroundImage: `url(${config.imageUrl})`
        };

        return (
            <div style={containerStyle} className={classes}>
                {config.imageUrl && (
                    <div
                        style={iconStyle}
                        className={`kumulos-${config.type}-icon`}
                    ></div>
                )}

                <div className={`kumulos-${config.type}-content`}>
                    <div className={`kumulos-${config.type}-header`}>
                        <h1>{heading}</h1>
                    </div>
                    <div className={`kumulos-${config.type}-body`}>{body}</div>
                </div>

                <div className={`kumulos-${config.type}-actions`}>
                    <button
                        type="button"
                        style={declineActionStyle}
                        className="kumulos-action-button kumulos-action-button-cancel"
                        onClick={this.onRequestCancel}
                    >
                        {declineAction}
                    </button>
                    <button
                        type="button"
                        style={acceptActionStyle}
                        className="kumulos-action-button kumulos-action-button-confirm"
                        onClick={this.onRequestNativePrompt}
                    >
                        {acceptAction}
                    </button>
                </div>
            </div>
        );
    }
}
