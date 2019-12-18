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
        return (
            <div>
                <h1>I'm a bell and you are {this.props.subscriptionState}</h1>
                <button onClick={this.props.requestNativePrompt}>
                    register
                </button>
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
