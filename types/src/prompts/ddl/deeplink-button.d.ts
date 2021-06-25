import { Component, h } from 'preact';
import { DdlUiActions } from '../../core';
interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    promptActions: DdlUiActions;
    onAction: () => void;
}
export default class DeeplinkButton extends Component<DeeplinkButtonProps, never> {
    private handleAction;
    render(): h.JSX.Element;
}
export {};
