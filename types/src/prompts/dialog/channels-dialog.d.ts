import { Component, h } from 'preact';
import { UserChannelSelectDialogAction, ChannelListItem } from '../../core';
import { UIContextState } from '../ui-context';
export interface ChannelsDialogProps {
    action: UserChannelSelectDialogAction;
    onConfirm: (selectedChannelUuids: string[]) => void;
}
export interface ChannelDialogState {
    selectedChannelUuids: string[];
}
export declare class ChannelsDialog extends Component<ChannelsDialogProps, ChannelDialogState> {
    constructor(props: ChannelsDialogProps);
    onConfirm: () => void;
    onSelectedChannelChanged: (channelList: ChannelListItem[]) => void;
    renderDialog: (uiContext?: UIContextState | undefined) => h.JSX.Element | null;
    render(): h.JSX.Element;
}
