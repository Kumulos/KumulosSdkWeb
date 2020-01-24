import './bell.scss';
import './overlay.scss';
import { Component, h } from 'preact';
import { PromptConfig } from '../core';
import { PromptManagerState } from '.';
import { PushSubscriptionState } from '../core/push';
interface UiProps {
    prompts: PromptConfig[];
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    requestNativePrompt: (prompt: PromptConfig) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
    currentlyRequestingPrompt?: PromptConfig;
}
export default class Ui extends Component<UiProps, never> {
    render(): import("preact").VNode<any>;
    renderPrompt(prompt: PromptConfig): h.JSX.Element | null;
}
export {};
