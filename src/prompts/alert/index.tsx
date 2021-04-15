import './alert.scss';
import '../overlay.scss';

import { Component, h } from 'preact';
import { AlertPromptConfig } from "../../core";
import { PromptUiProps } from "../ui";

export class Alert extends Component<PromptUiProps, never> {
  onRequestNativePrompt = () => {
      this.props.onPromptAccepted(this.props.config);
  };

  onRequestCancel = () => {
      this.props.onPromptDeclined(this.props.config);
  };

  render() {
      const classes = `kumulos-prompt kumulos-prompt-${this.props.promptManagerState} kumulos-alert-container`;
      const config = this.props.config;

      if (config.type !== 'alert') {
          return null;
      }

      const { labels, colors } = config;

      const heading = labels?.alert?.heading;
      const body = labels?.alert?.body;
      const iconUrl = config.iconUrl;

      const cancel = labels?.alert?.declineAction ?? 'maybe later';
      const accept = labels?.alert?.acceptAction ?? 'yes';

      const bgColor = colors?.alert?.bg;
      const fgColor = colors?.alert?.fg;
      const declineActionBgColor = colors?.alert?.declineActionBg;
      const declineActionFgColor = colors?.alert?.declineActionFg;
      const acceptActionBgColor = colors?.alert?.acceptActionBg;
      const acceptActionFgColor = colors?.alert?.acceptActionFg;

      const containerStyle = {
          backgroundColor: bgColor,
          color: fgColor
      };

      const declineActionStyle = {
          backgroundColor: declineActionBgColor,
          color: declineActionFgColor
      };

      const acceptActionStyle = {
          backgroundColor: acceptActionBgColor,
          color: acceptActionFgColor
      };

      return (
        <div style={containerStyle} className={classes}>
            <div className="kumulos-alert-header">
                <h1>{heading}</h1>
                <div className="kumulos-alert-icon">
                <img src={iconUrl} />
                </div>
            </div>

            <div className="kumulos-alert-body">
                {body}
            </div>

            <div className="kumulos-alert-actions">
                <button type="button" style={declineActionStyle} className="kumulos-alert-action-button kumulos-alert-action-button-cancel">{cancel}</button>
                <button type="button" style={acceptActionStyle} className="kumulos-alert-action-button kumulos-alert-action-button-confirm">{accept}</button>
            </div>
        </div>
    );
  }
}
