import './bell.scss';

import { Component, Fragment, h } from 'preact';

import { PromptConfig } from '../core';
import { PushSubscriptionState } from '../core/push';

function inversePosition(pos: string): 'left' | 'right' {
    return pos.indexOf('left') > -1 ? 'right' : 'left';
}

interface PromptUiProps {
    config: PromptConfig;
    subscriptionState: PushSubscriptionState;
    requestNativePrompt: () => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
}

interface TooltipProps {
    position: 'left' | 'right';
}

class Tooltip extends Component<TooltipProps, never> {
    render() {
        return (
            <div
                class={`kumulos-tooltip kumulos-tooltip-${this.props.position}`}
            >
                {this.props.children}
            </div>
        );
    }
}

class Bell extends Component<PromptUiProps, never> {
    render() {
        if (this.props.subscriptionState !== 'unsubscribed') {
            return null;
        }

        const classes = `kumulos-prompt kumulos-bell-container kumulos-bell-container-${this.props.config.position}`;
        const tooltipPos = inversePosition(this.props.config.position);

        return (
            <div class={classes}>
                <div class="kumulos-bell-inner kumulos-tooltip-parent">
                    <div
                        class="kumulos-bell"
                        onClick={this.props.requestNativePrompt}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                        </svg>
                    </div>
                    <Tooltip position={tooltipPos}>
                        {this.props.config.labels.subscribeTooltip}
                    </Tooltip>
                </div>
            </div>
        );
    }
}

interface UiProps {
    prompts: PromptConfig[];
    subscriptionState: PushSubscriptionState;
    requestNativePrompt: () => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
}

export default class Ui extends Component<UiProps, never> {
    render() {
        return (
            <Fragment>
                {this.props.prompts.map(this.renderPrompt, this)}
            </Fragment>
        );
    }

    renderPrompt(prompt: PromptConfig) {
        switch (prompt.type) {
            case 'bell':
                return (
                    <Bell
                        config={prompt}
                        subscriptionState={this.props.subscriptionState}
                        requestNativePrompt={this.props.requestNativePrompt}
                        onPromptDeclined={this.props.onPromptDeclined}
                    />
                );
            default:
                return null;
        }
    }
}
