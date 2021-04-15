import './alert.scss';
import '../overlay.scss';
import { Component, h } from 'preact';
import { PromptUiProps } from "../ui";
export declare class Alert extends Component<PromptUiProps, never> {
    onRequestNativePrompt: () => void;
    onRequestCancel: () => void;
    render(): h.JSX.Element | null;
}
