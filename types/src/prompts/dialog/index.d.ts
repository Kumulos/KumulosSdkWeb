import { AlertPromptConfig, BannerPromptConfig, ChannelListItem } from '../../core';
import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
export interface DialogState {
    channelSelections: ChannelListItem[];
}
export declare class Dialog extends Component<PromptUiProps<AlertPromptConfig | BannerPromptConfig>, DialogState> {
    constructor(props: PromptUiProps<AlertPromptConfig | BannerPromptConfig>);
    onRequestNativePrompt: () => void;
    onRequestCancel: () => void;
    onSelectedChannelChanged: (channelList: ChannelListItem[]) => void;
    render(): h.JSX.Element;
}
