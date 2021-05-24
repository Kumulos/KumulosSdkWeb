import { Component, h } from 'preact';
import { DDLConfig } from './config';
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
    render(): h.JSX.Element;
}
