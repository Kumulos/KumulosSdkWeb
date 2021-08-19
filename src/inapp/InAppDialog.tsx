import { Component, h } from 'preact';
import InAppDisplayProxy from './in-app';
import { InAppMessagePartForPreview } from './structs';

export interface InAppDialogProps {
    messagePart: InAppMessagePartForPreview;
    onMessageAction: (action: any) => void;
}

export interface InAppDialogState {}

export default class InAppDialog extends Component<
    InAppDialogProps,
    InAppDialogState
> {
    onRequestCancel = () => {};

    render() {
        const classes = `kumulos-prompt kumulos-inapp-container kumulos-prompt-position-top`;

        return (
            <div className={classes}>
                {
                    <InAppDisplayProxy
                        messagePart={this.props.messagePart}
                        width="100%"
                        height="100%"
                        onMessageAction={this.props.onMessageAction}
                    />
                }
            </div>
        );
    }
}
