import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
import { AlertPromptConfig, PlatformConfig, BannerPromptConfig } from '../../core';
export declare class Alert extends Component<PromptUiProps<AlertPromptConfig | BannerPromptConfig>, never> {
    onRequestNativePrompt: () => void;
    onRequestCancel: () => void;
    renderAlert: (platformConfig?: PlatformConfig | undefined) => h.JSX.Element;
    render(): h.JSX.Element;
}
