import './bell.scss';
import { Component, h } from 'preact';
import { PromptConfig } from '../core';
import { PromptManagerState } from '.';
import { PushSubscriptionState } from '../core/push';
interface UiProps {
    prompts: PromptConfig[];
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    requestNativePrompt: () => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
}
export default class Ui extends Component<UiProps, never> {
    render(): h.JSX.Element;
    renderPrompt(prompt: PromptConfig): h.JSX.Element | null;
}
export {};
