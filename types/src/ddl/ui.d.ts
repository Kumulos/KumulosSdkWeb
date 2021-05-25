import { Component } from 'preact';
import { DDLConfig } from './config';
interface UiProps {
    config?: DDLConfig;
    onBannerConfirm: (config: DDLConfig) => void;
    onBannerCancelled: (config: DDLConfig) => void;
}
export default class Ui extends Component<UiProps, never> {
    private siteMargin?;
    private siteTransition?;
    onDimensions: (_bannerWidth: number, bannerHeight: number) => void;
    onBannerConfirm: (config: DDLConfig) => void;
    onBannerCancelled: (config: DDLConfig) => void;
    resetBodyStyles(): void;
    renderBanner(): void;
    render(): import("preact").VNode<any> | null;
}
export {};
