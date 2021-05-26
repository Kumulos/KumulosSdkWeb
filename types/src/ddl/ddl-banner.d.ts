import { Component, h } from 'preact';
import { DDLBannerPromptConfig } from '../core';
import { UIContextState } from './ui-context';
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
    renderBanner: (uiContext?: UIContextState | undefined) => h.JSX.Element;
    render(): h.JSX.Element;
}
