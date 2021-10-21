import { Component, h } from 'preact';
import { PushPromptConfig } from '../../core';
import { PromptManagerState } from '../index';
import { PushSubscriptionState } from '../../core/push';
interface OverlaySilentProps {
    promptState: PromptManagerState;
    prompt?: PushPromptConfig;
    subscriptionState: PushSubscriptionState;
}
export declare class OverlaySilent extends Component<OverlaySilentProps, never> {
    render(): h.JSX.Element | null;
}
export {};
