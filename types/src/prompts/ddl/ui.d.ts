import { Component } from 'preact';
import { DdlPromptConfig } from '../../core';
interface UiProps {
    config: DdlPromptConfig;
    onBannerConfirm: (config: DdlPromptConfig) => void;
    onBannerCancelled: (config: DdlPromptConfig) => void;
    onCaptureFp: (bannerUuid: string, components: any[]) => void;
}
export default class Ui extends Component<UiProps, never> {
    private siteMargin?;
    private siteTransition?;
    onDimensions: (_bannerWidth: number, bannerHeight: number) => void;
    onBannerConfirm: (config: DdlPromptConfig) => void;
    onBannerCancelled: (config: DdlPromptConfig) => void;
    resetBodyStyles(): void;
    render(): import("preact").VNode<any> | null;
}
export {};
