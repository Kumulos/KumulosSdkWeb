import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
import { StripPromptConfig, PlatformConfig } from '../../core';
import { PlatformConfigContext } from '../ui-context';

const styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};

export class Strip extends Component<PromptUiProps<StripPromptConfig>, never> {
    onRequestNativePrompt = () => {
        this.props.onPromptAccepted(this.props.config);
    };

    onRequestCancel = () => {
        this.props.onPromptDeclined(this.props.config);
    };

    renderAlert = (platformConfig?: PlatformConfig) => {
        const config = this.props.config;
        const classes = `kumulos-prompt kumulos-strip-container kumulos-prompt-position-${config.position}`;

        const {
            heading,
            body,
            declineAction,
            acceptAction
        } = config.labels.strip;
        const {
            bg,
            fg,
            acceptActionBg,
            acceptActionFg,
            declineActionBg,
            declineActionFg
        } = config.colors.strip;

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
            backgroundImage: `url(${platformConfig?.iconUrl})`
        };

        return (
            <div style={containerStyle} className={classes}>
                <div style={iconStyle} className="kumulos-strip-icon"></div>

                <div className="kumulos-strip-content">
                    <div className="kumulos-strip-header">
                        <h1>{heading}</h1>
                    </div>
                    <div className="kumulos-strip-body">{body}</div>
                </div>

                <div className="kumulos-strip-actions">
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
    };

    render() {
        return (
            <PlatformConfigContext.Consumer>
                {this.renderAlert}
            </PlatformConfigContext.Consumer>
        );
    }
}
