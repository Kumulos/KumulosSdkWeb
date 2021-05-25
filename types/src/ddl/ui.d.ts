import { Component } from 'preact';
import { PromptConfig } from '../core';
interface UiProps {
    config?: PromptConfig;
    onBannerConfirm: (config: PromptConfig) => void;
    onBannerCancelled: (config: PromptConfig) => void;
}
export default class Ui extends Component<UiProps, never> {
    private siteMargin?;
    private siteTransition?;
    onDimensions: (_bannerWidth: number, bannerHeight: number) => void;
    onBannerConfirm: (config: PromptConfig) => void;
    onBannerCancelled: (config: PromptConfig) => void;
    resetBodyStyles(): void;
    renderBanner(): void;
    render(): import("preact").VNode<any> | null;
}
export {};
