import { Component, Fragment, h } from 'preact';

import { PromptConfig } from '../core';
import { PushSubscriptionState } from '../core/push';

interface PromptUiProps {
    config: PromptConfig;
    subscriptionState: PushSubscriptionState;
}

class Bell extends Component<PromptUiProps, never> {
    render() {
        return <h1>I'm a bell and you are {this.props.subscriptionState}</h1>;
    }
}

interface UiProps {
    prompts: PromptConfig[];
    subscriptionState: PushSubscriptionState;
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
                    />
                );
            default:
                return null;
        }
    }
}
