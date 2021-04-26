import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
import { AlertPromptConfig, PlatformConfig } from '../../core';
import { PlatformConfigContext } from '../ui-context';

export class Alert extends Component<PromptUiProps<AlertPromptConfig>, never> {
    onRequestNativePrompt = () => {
        this.props.onPromptAccepted(this.props.config);
    };

    onRequestCancel = () => {
        this.props.onPromptDeclined(this.props.config);
    };

    renderAlert = (platformConfig?: PlatformConfig) => {
        const config = this.props.config;
        const classes = `kumulos-prompt kumulos-prompt-${this.props.promptManagerState} kumulos-alert-container kumulos-prompt-position-${config.position}`;

        const {
            heading,
            body,
            declineAction,
            acceptAction
        } = config.labels.alert;
        const {
            bg,
            fg,
            acceptActionBg,
            acceptActionFg,
            declineActionBg,
            declineActionFg
        } = config.colors.alert;

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

        return (
            <div style={containerStyle} className={classes}>
                <div className="kumulos-alert-header">
                    <h1>{heading}</h1>
                    <div className="kumulos-alert-icon">
                        <img src={platformConfig?.iconUrl} />
                    </div>
                </div>

                <div className="kumulos-alert-body">{body}</div>

                <div className="kumulos-alert-actions">
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
