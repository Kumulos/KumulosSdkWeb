import { Component, h } from 'preact';
interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    linkUrl: string;
    onAction: () => void;
}
export default class DeeplinkButton extends Component<DeeplinkButtonProps, never> {
    private readonly btnRef;
    private clipboard?;
    constructor(props: DeeplinkButtonProps);
    onTouchEnd: () => void;
    componentWillUnmount(): void;
    render(): h.JSX.Element;
}
export {};
