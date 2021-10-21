import { Component, h } from 'preact';

import { PushPromptConfig } from '../../core';
import { PromptManagerState } from '../index';
import { PushSubscriptionState } from '../../core/push';
import { getBrowserName, isMobile } from '../../core/utils';
import { BackgroundMask } from './background-mask';

const localStyles = {
    mask: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

interface OverlaySilentProps {
    promptState: PromptManagerState;
    prompt?: PushPromptConfig;
    subscriptionState: PushSubscriptionState;
    onClick?: () => void;
}

interface OverlaySilentState {
    windowDimensions: { width: number; height: number };
}

export class OverlaySilent extends Component<
    OverlaySilentProps,
    OverlaySilentState
> {
    componentWillMount() {
        const { innerWidth: width, innerHeight: height } = window;

        this.setState({ windowDimensions: { width, height } });
    }

    render() {
        const { promptState, prompt, subscriptionState } = this.props;
        const { windowDimensions } = this.state;

        if (
            !prompt ||
            promptState !== 'requesting-silent' ||
            !prompt.silentOverlay ||
            subscriptionState !== 'unsubscribed'
        ) {
            return null;
        }

        const overlay = prompt.silentOverlay;
        const maskStyle = {
            ...localStyles.mask,
            color: overlay.colors.text
        };

        return (
            <BackgroundMask
                blurClass="kumulos-overlay-blur"
                class={`kumulos-silent-overlay kumulos-silent-overlay-${getBrowserName()}`}
                style={maskStyle}
                onClick={this.props.onClick}
            >
                <div class="kumulos-silent-overlay-indicator">
                    <svg
                        viewBox={`0 0 ${windowDimensions.width} ${windowDimensions.height}`}
                        width={`${windowDimensions.width}px`}
                        height={`${windowDimensions.height}px`}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path
                                style="stroke: rgb(0, 0, 0); fill: none;"
                                d="M 252.638 263.846 C 270.732 357.853 451.681 320.866 453.641 24.124"
                            />
                            <path
                                style="stroke: rgb(0, 0, 0); paint-order: fill; fill-rule: nonzero; fill: none;"
                                d="M 430.112 61.979 C 449.247 -6.052 457.301 -9.017 478.772 61.721"
                            />
                        </g>
                    </svg>
                </div>

                <p class="kumulos-silent-overlay-content-text">
                    {prompt.silentOverlay.labels.body}
                </p>
            </BackgroundMask>
        );
    }
}
