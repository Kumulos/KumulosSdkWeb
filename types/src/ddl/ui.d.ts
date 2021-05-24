import { Component, h } from 'preact';
import { DDLConfig } from './config';
interface UiProps {
    config: DDLConfig;
    onBannerConfirm: (config: DDLConfig) => void;
    onBannerCancelled: (config: DDLConfig) => void;
}
export default class Ui extends Component<UiProps, never> {
    private siteMarginTop?;
    private siteTransition?;
    onDimensions: (_bannerWidth: number, bannerHeight: number) => void;
    onBannerConfirm: (config: DDLConfig) => void;
    onBannerCancelled: (config: DDLConfig) => void;
    resetBodyStyles(): void;
    render(): h.JSX.Element;
}
export {};
