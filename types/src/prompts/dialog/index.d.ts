import { Component, h } from 'preact';
import { PromptUiProps } from '../ui';
import { AlertPromptConfig, BannerPromptConfig, ChannelListItem } from '../../core';
import { UIContextState } from '../ui-context';
export interface DialogState {
    channelSelections: ChannelListItem[];
}
export declare class Dialog extends Component<PromptUiProps<AlertPromptConfig | BannerPromptConfig>, DialogState> {
    constructor(props: PromptUiProps<AlertPromptConfig | BannerPromptConfig>);
    onRequestNativePrompt: () => void;
    onRequestCancel: () => void;
    onSelectedChannelChanged: (channelList: ChannelListItem[]) => void;
    renderAlert: (uiContext?: UIContextState | undefined) => h.JSX.Element | null;
    render(): h.JSX.Element;
}
