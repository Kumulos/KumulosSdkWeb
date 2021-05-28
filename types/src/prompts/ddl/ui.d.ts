import { Component } from 'preact';
import { DDLPromptConfig } from '../../core';
interface UiProps {
    config?: DDLPromptConfig;
    onBannerConfirm: (config: DDLPromptConfig) => void;
    onBannerCancelled: (config: DDLPromptConfig) => void;
}
export default class Ui extends Component<UiProps, never> {
    private siteMargin?;
    private siteTransition?;
    onDimensions: (_bannerWidth: number, bannerHeight: number) => void;
    onBannerConfirm: (config: any) => void;
    onBannerCancelled: (config: any) => void;
    resetBodyStyles(): void;
    renderBanner(): void;
    render(): import("preact").VNode<any> | null;
}
export {};
