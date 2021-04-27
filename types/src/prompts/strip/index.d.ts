import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
import { StripPromptConfig, PlatformConfig } from '../../core';
export declare class Strip extends Component<PromptUiProps<StripPromptConfig>, never> {
    onRequestNativePrompt: () => void;
    onRequestCancel: () => void;
    renderAlert: (platformConfig?: PlatformConfig | undefined) => h.JSX.Element;
    render(): h.JSX.Element;
}
