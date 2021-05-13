import { Component, h } from 'preact';
import { PlatformConfig, UserChannelSelectDialogAction } from '../../core';
export interface ChannelsDialogProps {
    action: UserChannelSelectDialogAction;
    onConfirm: (selectedChannelUuids: string[]) => void;
}
export declare class ChannelsDialog extends Component<ChannelsDialogProps, never> {
    onConfirm: () => void;
    renderDialog: (platformConfig?: PlatformConfig | undefined) => h.JSX.Element;
    render(): h.JSX.Element;
}
