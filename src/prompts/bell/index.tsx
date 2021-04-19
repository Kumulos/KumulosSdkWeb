import './bell.scss';

import { Component, h } from 'preact';
import { BellPromptConfig } from "../../core";
import { DEFAULT_SUBSCRIBE_LABEL, inversePosition, PromptUiProps, Tooltip } from "../ui";

export class Bell extends Component<PromptUiProps<BellPromptConfig>, never> {
  onRequestNativePrompt = () => {
      this.props.onPromptAccepted(this.props.config);
  };

  render() {
      const classes = `kumulos-prompt kumulos-prompt-${this.props.promptManagerState} kumulos-bell-container kumulos-bell-container-${this.props.config.position}`;
      const { config } = this.props;

      const tooltipPos = inversePosition(config.position);
      const bgColor = config.colors?.bell?.bg;
      const fgColor = config.colors?.bell?.fg;

      const bellStyle = {
          borderColor: fgColor,
          backgroundColor: bgColor
      };

      return (
          <div class={classes}>
              <div class="kumulos-bell-inner kumulos-tooltip-parent">
                  <div
                      class="kumulos-bell"
                      onClick={this.onRequestNativePrompt}
                      style={bellStyle as any}
                  >
                      <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                              fill={fgColor}
                          />
                      </svg>
                  </div>
                  <Tooltip position={tooltipPos}>
                      {config.labels?.tooltip?.subscribe ??
                          DEFAULT_SUBSCRIBE_LABEL}
                  </Tooltip>
              </div>
          </div>
      );
  }
}