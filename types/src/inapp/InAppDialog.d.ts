import { Component, h } from 'preact';
import { InAppMessagePartForPreview } from './structs';
export interface InAppDialogProps {
    messagePart: InAppMessagePartForPreview;
    onMessageAction: (action: any) => void;
}
export interface InAppDialogState {
}
export default class InAppDialog extends Component<InAppDialogProps, InAppDialogState> {
    onRequestCancel: () => void;
    render(): h.JSX.Element;
}
