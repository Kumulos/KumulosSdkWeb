import './bell.scss';

import { Component, Fragment, h } from 'preact';

import { PromptConfig } from '../core';
import { PushSubscriptionState } from '../core/push';

interface PromptUiProps {
    config: PromptConfig;
    subscriptionState: PushSubscriptionState;
    requestNativePrompt: () => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
}

class Bell extends Component<PromptUiProps, never> {
    render() {
        if (this.props.subscriptionState !== 'unsubscribed') {
            return null;
        }

        const classes = `kumulos-prompt kumulos-bell kumulos-bell-${this.props.config.position}`;

        return (
            <div class={classes} onClick={this.props.requestNativePrompt}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
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
