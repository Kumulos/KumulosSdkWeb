import { Component, h } from 'preact';
import { UserChannelSelectDialogAction } from '../../core';
import { UIContextState } from '../ui-context';
export interface ChannelsDialogProps {
    action: UserChannelSelectDialogAction;
    onConfirm: (selectedChannelUuids: string[]) => void;
}
export declare class ChannelsDialog extends Component<ChannelsDialogProps, never> {
    onConfirm: () => void;
    renderDialog: (uiContext?: UIContextState | undefined) => h.JSX.Element | null;
    render(): h.JSX.Element;
}
