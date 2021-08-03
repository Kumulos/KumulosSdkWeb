import { Component } from 'preact';
import { DdlPromptConfig, Context } from '../../core';
import { FingerprintComponents } from '../../fp/types';
interface UiProps {
    config: DdlPromptConfig;
    context: Context;
    onBannerConfirm: (config: DdlPromptConfig, fingerprintComponents?: FingerprintComponents) => void;
    onBannerCancelled: (config: DdlPromptConfig) => void;
}
interface UiState {
    requestFpCapture: boolean;
}
export default class Ui extends Component<UiProps, UiState> {
    private siteMargin?;
    private siteTransition?;
    constructor(props: UiProps);
    private onDimensions;
    private onBannerConfirm;
    private onBannerCancelled;
    private onCaptureFp;
    private resetBodyStyles;
    render(): import("preact").VNode<any> | null;
}
export {};
