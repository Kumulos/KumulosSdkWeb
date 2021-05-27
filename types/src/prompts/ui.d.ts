import { Component, h, JSX } from 'preact';
import { PushPromptConfig, PromptAction, UserChannelSelectInlineAction, ChannelListItem } from '../core';
import { PromptManagerState } from '.';
import { PushSubscriptionState } from '../core/push';
export declare const DEFAULT_SUBSCRIBE_LABEL = "Subscribe for notifications";
export declare function inversePosition(pos: string): 'left' | 'right';
export interface PromptUiProps<T extends PushPromptConfig> {
    config: T;
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (prompt: PushPromptConfig, channelSelections?: ChannelListItem[]) => void;
    onPromptDeclined: (prompt: PushPromptConfig) => void;
    action?: UserChannelSelectInlineAction;
}
interface TooltipProps {
    position: 'left' | 'right';
}
export declare class Tooltip extends Component<TooltipProps, never> {
    render(): h.JSX.Element;
}
interface OverlayProps {
    promptState: PromptManagerState;
    prompt?: PushPromptConfig;
    subscriptionState: PushSubscriptionState;
}
export declare class Overlay extends Component<OverlayProps, never> {
    render(): h.JSX.Element | null;
}
export declare class Toast extends Component<{
    message: string;
}, never> {
    render(): h.JSX.Element;
}
interface BackgroundMaskProps {
    class?: string;
    blurClass?: string;
    style?: JSX.CSSProperties;
}
interface BackgroundMaskState {
    blurClasses: string[];
}
export declare class BackgroundMask extends Component<BackgroundMaskProps, BackgroundMaskState> {
    constructor(props: BackgroundMaskProps);
    updateBlurState(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): h.JSX.Element;
}
interface UiProps {
    prompts: PushPromptConfig[];
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (prompt: PushPromptConfig, channelSelections?: ChannelListItem[]) => void;
    onPromptDeclined: (prompt: PushPromptConfig) => void;
    onPostActionConfirm: (prompt: PushPromptConfig, channelSelections?: ChannelListItem[]) => void;
    currentlyRequestingPrompt?: PushPromptConfig;
    currentPostAction?: PromptAction;
}
interface UiState {
    toastQueue: string[];
}
export default class Ui extends Component<UiProps, UiState> {
    constructor(props: UiProps);
    dequeueToast: () => void;
    showToast(message?: string): void;
    render(): import("preact").VNode<any>;
    maybeRenderPromptBackgroundMask(): h.JSX.Element | null;
    renderPrompt(prompt: PushPromptConfig): h.JSX.Element | null;
    renderPostAction(): h.JSX.Element | null;
}
export {};
