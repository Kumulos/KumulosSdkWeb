import { Component, h } from 'preact';
import { DDLBannerPromptConfig } from '../../core';
export interface DDLBannerProps {
    config: DDLBannerPromptConfig;
    onConfirm: (config: DDLBannerPromptConfig) => void;
    onCancel: (config: DDLBannerPromptConfig) => void;
    dimensions: (width: number, height: number) => void;
}
export declare class DDLBanner extends Component<DDLBannerProps, never> {
    private containerRef;
    constructor(props: DDLBannerProps);
    componentDidMount(): void;
    onConfirm: () => void;
    onCancel: () => void;
    render(): h.JSX.Element;
}
