import './bell.scss';
import { Component, h } from 'preact';
import { BellPromptConfig } from "../../core";
import { PromptUiProps } from "../ui";
export declare class Bell extends Component<PromptUiProps<BellPromptConfig>, never> {
    onRequestNativePrompt: () => void;
    render(): h.JSX.Element;
}
