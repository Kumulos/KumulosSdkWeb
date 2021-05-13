import { Component, h } from 'preact';
import { ChannelListItem } from '../../core';
interface ChannelListProps {
    channelList: ChannelListItem[];
    onChannelSelectionChanged: (channelList: ChannelListItem[]) => void;
}
interface ChannelListState {
    channels: ChannelListItem[];
}
export declare class ChannelsList extends Component<ChannelListProps, ChannelListState> {
    constructor(props: ChannelListProps);
    onChannelCheckChange(channelUuid: string, checked: boolean): void;
    render(): h.JSX.Element | null;
}
export {};
