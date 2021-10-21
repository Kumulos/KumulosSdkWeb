import { Component, h } from 'preact';

import { PushPromptConfig } from '../../core';
import { PromptManagerState } from '../index';
import { PushSubscriptionState } from '../../core/push';
import { getBrowserName, isMobile } from '../../core/utils';
import { BackgroundMask } from './background-mask';

interface OverlaySilentProps {
    promptState: PromptManagerState;
    prompt?: PushPromptConfig;
    subscriptionState: PushSubscriptionState;
}

export class OverlaySilent extends Component<OverlaySilentProps, never> {
    render() {
        const { promptState, prompt, subscriptionState } = this.props;

        if (
            !prompt ||
            promptState !== 'requesting-silent' ||
            subscriptionState !== 'unsubscribed'
        ) {
            return null;
        }

        return (
            <BackgroundMask
                // maintains backwards compat with existing blur class that
                // was being applied directly by this component previously
                blurClass="kumulos-overlay-blur"
                class={`kumulos-overlay kumulos-overlay-${getBrowserName()}`}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <p style={{ padding: 10, backgroundColor: '#ffffff' }}>
                    !!! CLICK THE BLOCKED PUSH PERMS ARROW AND TEXT HERE !!!
                </p>
            </BackgroundMask>
        );
    }
}
