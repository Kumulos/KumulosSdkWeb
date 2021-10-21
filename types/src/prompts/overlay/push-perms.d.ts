import { Component, h } from 'preact';
import { PushPromptConfig } from '../../core';
import { PromptManagerState } from '../index';
import { PushSubscriptionState } from '../../core/push';
interface OverlayProps {
    promptState: PromptManagerState;
    prompt?: PushPromptConfig;
    subscriptionState: PushSubscriptionState;
}
export declare class Overlay extends Component<OverlayProps, never> {
    render(): h.JSX.Element | null;
}
export {};
