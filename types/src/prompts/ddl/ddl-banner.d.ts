import { Component, h } from 'preact';
import { DdlBannerPromptConfig } from '../../core';
export interface DdlBannerProps {
    config: DdlBannerPromptConfig;
    onConfirm: (config: DdlBannerPromptConfig) => void;
    onCancel: (config: DdlBannerPromptConfig) => void;
    dimensions: (width: number, height: number) => void;
}
export declare class DdlBanner extends Component<DdlBannerProps, never> {
    private containerRef;
    constructor(props: DdlBannerProps);
    componentDidMount(): void;
    private onConfirm;
    private onCancel;
    private getCssClasses;
    render(): h.JSX.Element;
}
