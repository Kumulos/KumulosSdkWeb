import { Component, h } from 'preact';
import { DDLConfig } from './config';
import { UIContextState } from './ui-context';
export interface DDLBannerProps {
    config: DDLConfig;
    onConfirm: (config: DDLConfig) => void;
    onCancel: (config: DDLConfig) => void;
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
