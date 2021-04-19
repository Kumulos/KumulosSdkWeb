import './alert.scss';
import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
import { AlertPromptConfig } from '../../core';
export declare class Alert extends Component<PromptUiProps<AlertPromptConfig>, never> {
    onRequestNativePrompt: () => void;
    onRequestCancel: () => void;
    render(): h.JSX.Element;
}
