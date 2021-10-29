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

const POINTER_START_OFFSET: Point = {
    x: 0,
    y: 50
};

const POINTER_END_OFFSET: Point = {
    x: -175,
    y: 75
};

const CONTROL_POINT_OFFSET: Point = {
    x: 0,
    y: 500
};

interface OverlaySilentProps {
    promptState: PromptManagerState;
    prompt?: PushPromptConfig;
    subscriptionState: PushSubscriptionState;
    onDismiss?: (prompt: PushPromptConfig) => void;
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

        return (
            <BackgroundMask
                blurClass="kumulos-overlay-blur"
                class={`kumulos-overlay kumulos-overlay-${getBrowserName()}`}
                style={maskStyle}
                onClick={this.onBackgroundMaskClick}
            >
                {this.renderPointer(color)}
                <p class="kumulos-silent-overlay-content-text">{bodyLabel}</p>
            </BackgroundMask>
        );
    }

    private renderPointer(color: string) {
        const { windowDimensions } = this.state;

        const pointerStart: Point = {
            x: windowDimensions.width / 2 + POINTER_START_OFFSET.x,
            y: windowDimensions.height / 2 + POINTER_START_OFFSET.y
        };

        const pointerEnd: Point = {
            x: windowDimensions.width + POINTER_END_OFFSET.x,
            y: POINTER_END_OFFSET.y
        };

        const controlPoint: Point = {
            x: pointerEnd.x + CONTROL_POINT_OFFSET.x,
            y: pointerStart.y + CONTROL_POINT_OFFSET.y
        };

        return (
            <div class="kumulos-silent-overlay-indicator">
                <SvgPointer
                    area={windowDimensions}
                    quadCurvePoints={{
                        p1: pointerStart,
                        p2: controlPoint,
                        p3: pointerEnd
                    }}
                    color={color}
                />
            </div>
        );
    }

    private onBackgroundMaskClick = () => {
        const { prompt, onDismiss } = this.props;

        if (!prompt || !onDismiss) {
            return;
        }

        onDismiss(prompt);
    };
}
