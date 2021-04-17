import './bell.scss';
import { Component, h } from 'preact';
import { PromptUiProps } from "../ui";
export declare class Bell extends Component<PromptUiProps, never> {
    onRequestNativePrompt: () => void;
    render(): h.JSX.Element | null;
}
