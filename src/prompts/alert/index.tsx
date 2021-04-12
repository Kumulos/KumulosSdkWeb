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
      const config = this.props.config as AlertPromptConfig;
      const heading = config.labels?.heading;
      const body = config.labels?.body;
      const iconUrl = config.iconUrl;

      const cancel = config.labels?.cancel ?? 'maybe later';
      const accept = config.labels?.accept ?? 'yes';

      return (
          <div class={classes}>
              <div class="kumulos-alert-header">
                <h1>{heading}</h1>
                <div class="kumulos-alert-icon">
                  <img src={iconUrl} />
                </div>
              </div>

              <div class="kumulos-alert-body">
                {body}
              </div>

              <div class="kumulos-alert-actions">
                <button type="button" class="kumulos-alert-action-button kumulos-alert-action-button-cancel" onClick={this.onRequestCancel}>{cancel}</button>
                <button type="button" class="kumulos-alert-action-button kumulos-alert-action-button-confirm" onClick={this.onRequestNativePrompt}>{accept}</button>
              </div>
          </div>
      );
  }
}
