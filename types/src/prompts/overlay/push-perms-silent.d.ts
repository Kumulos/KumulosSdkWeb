import { Component, h } from 'preact';
import { PushPromptConfig, Dimensions } from '../../core';
import { PromptManagerState } from '../index';
import { PushSubscriptionState } from '../../core/push';
interface OverlaySilentProps {
    promptState: PromptManagerState;
    prompt?: PushPromptConfig;
    subscriptionState: PushSubscriptionState;
    onClick?: () => void;
}
interface OverlaySilentState {
    windowDimensions: Dimensions;
}
export declare class OverlaySilent extends Component<OverlaySilentProps, OverlaySilentState> {
    componentWillMount(): void;
    render(): h.JSX.Element | null;
}
export {};
