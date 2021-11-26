import { Component, h } from 'preact';
import { DdlUiActions, UiActionType } from '../../core';
interface DeeplinkButtonProps {
    style: h.JSX.CSSProperties;
    class: string;
    text: string;
    promptActions: DdlUiActions;
    onAction: (actionType: UiActionType) => void;
}
export default class DeeplinkButton extends Component<DeeplinkButtonProps, never> {
    private handleAction;
    render(): h.JSX.Element;
}
export {};
