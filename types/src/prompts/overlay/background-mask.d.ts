import { Component, h, JSX } from 'preact';
interface BackgroundMaskProps {
    class?: string;
    blurClass?: string;
    style?: JSX.CSSProperties;
    onClick?: () => void;
}
interface BackgroundMaskState {
    blurClasses: string[];
}
export declare class BackgroundMask extends Component<BackgroundMaskProps, BackgroundMaskState> {
    constructor(props: BackgroundMaskProps);
    updateBlurState(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): h.JSX.Element;
}
export {};
