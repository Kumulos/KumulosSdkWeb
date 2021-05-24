import { Component, h } from 'preact';
interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    linkUrl: string;
    onClick: () => void;
}
export default class DeeplinkButton extends Component<DeeplinkButtonProps, {
    ready: boolean;
}> {
    private readonly btnRef;
    private clipboard?;
    constructor(props: DeeplinkButtonProps);
    componentDidMount(): void;
    onClick: () => false | void;
    render(): h.JSX.Element;
}
export {};
