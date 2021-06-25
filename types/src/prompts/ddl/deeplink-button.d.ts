import { Component, h } from 'preact';
interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    onAction: () => void;
}
export default class DeeplinkButton extends Component<DeeplinkButtonProps, never> {
    render(): h.JSX.Element;
}
export {};
