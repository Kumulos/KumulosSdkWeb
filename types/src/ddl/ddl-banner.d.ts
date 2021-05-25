import { Component, h } from 'preact';
import { PromptConfig } from '../core';
import { UIContextState } from './ui-context';
export interface DDLBannerProps {
    config: PromptConfig;
    onConfirm: (config: PromptConfig) => void;
    onCancel: (config: PromptConfig) => void;
    dimensions: (width: number, height: number) => void;
}
export declare class DDLBanner extends Component<DDLBannerProps, never> {
    private containerRef;
    constructor(props: DDLBannerProps);
    componentDidMount(): void;
    onConfirm: () => void;
    onCancel: () => void;
    renderBanner: (uiContext?: UIContextState | undefined) => h.JSX.Element | null;
    render(): h.JSX.Element;
}
