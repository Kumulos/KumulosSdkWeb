import { Component, h } from 'preact';
import { UserChannelSelectDialogAction, ChannelListItem } from '../../core';
import { UIContextState } from '../ui-context';
export interface ChannelsDialogProps {
    action: UserChannelSelectDialogAction;
    onConfirm: (channelSelections: ChannelListItem[]) => void;
}
export interface ChannelDialogState {
    channelSelections: ChannelListItem[];
}
export declare class ChannelsDialog extends Component<ChannelsDialogProps, ChannelDialogState> {
    constructor(props: ChannelsDialogProps);
    onConfirm: () => void;
    onSelectedChannelChanged: (channelList: ChannelListItem[]) => void;
    renderDialog: (uiContext?: UIContextState) => h.JSX.Element | null;
    render(): h.JSX.Element;
}
