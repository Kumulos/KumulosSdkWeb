import { Component, h } from 'preact';

import { PushPromptConfig, Point, Dimensions } from '../../core';
import { PromptManagerState } from '../index';
import { PushSubscriptionState } from '../../core/push';
import { getBrowserName, isMobile } from '../../core/utils';
import { BackgroundMask } from './background-mask';
import { SvgPointer } from '../../components/svg-pointer';

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
    windowDimensions: Dimensions;
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
        const bodyLabel = overlay.labels.body;
        const color = overlay.colors.text;

        const maskStyle = {
            ...localStyles.mask,
            color
        };

        const pointerStart: Point = {
            x: windowDimensions.width / 2,
            y: windowDimensions.height / 2 + 50
        };

        const pointerEnd: Point = {
            x: windowDimensions.width - 200,
            y: 75
        };

        return (
            <BackgroundMask
                blurClass="kumulos-overlay-blur"
                class={`kumulos-silent-overlay kumulos-silent-overlay-${getBrowserName()}`}
                style={maskStyle}
                onClick={this.props.onClick}
            >
                <div class="kumulos-silent-overlay-indicator">
                    <SvgPointer
                        area={windowDimensions}
                        start={pointerStart}
                        end={pointerEnd}
                        color={color}
                    />
                </div>

                <p class="kumulos-silent-overlay-content-text">{bodyLabel}</p>
            </BackgroundMask>
        );
    }
}
