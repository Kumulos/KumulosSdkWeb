import './overlay.scss';
import './underlay.scss';
import './prompts.scss';
import { Component, h } from 'preact';
import { PromptConfig } from '../core';
import { PromptManagerState } from '.';
import { PushSubscriptionState } from '../core/push';
export declare const DEFAULT_SUBSCRIBE_LABEL = "Subscribe for notifications";
export declare function inversePosition(pos: string): 'left' | 'right';
export declare function isMobile(): boolean;
export interface PromptUiProps<T extends PromptConfig> {
    config: T;
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (prompt: PromptConfig) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
}
interface TooltipProps {
    position: 'left' | 'right';
}
export declare class Tooltip extends Component<TooltipProps, never> {
    render(): h.JSX.Element;
}
interface UiProps {
    prompts: PromptConfig[];
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (prompt: PromptConfig) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
    currentlyRequestingPrompt?: PromptConfig;
}
interface UiState {
    toastQueue: string[];
}
export default class Ui extends Component<UiProps, UiState> {
    constructor(props: UiProps);
    dequeueToast: () => void;
    showToast(message?: string): void;
    render(): import("preact").VNode<any>;
    renderUnderlay(): h.JSX.Element;
    renderPrompt(prompt: PromptConfig): h.JSX.Element | null;
}
export {};
