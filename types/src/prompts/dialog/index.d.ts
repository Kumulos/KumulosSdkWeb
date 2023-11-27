import { AlertPromptConfig, BannerPromptConfig } from '../../core';
import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
export declare class Dialog extends Component<PromptUiProps<AlertPromptConfig | BannerPromptConfig>> {
    constructor(props: PromptUiProps<AlertPromptConfig | BannerPromptConfig>);
    onRequestNativePrompt: () => void;
    onRequestCancel: () => void;
    render(): h.JSX.Element;
}
