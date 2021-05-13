import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
import { AlertPromptConfig, BannerPromptConfig } from '../../core';
import { UIContextState } from '../ui-context';
export declare class Dialog extends Component<PromptUiProps<AlertPromptConfig | BannerPromptConfig>, never> {
    onRequestNativePrompt: () => void;
    onRequestCancel: () => void;
    renderAlert: (uiContext?: UIContextState | undefined) => h.JSX.Element | null;
    render(): h.JSX.Element;
}
