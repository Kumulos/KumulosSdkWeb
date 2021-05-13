import { Component, h } from 'preact';
import { UserChannelSelectDialogAction } from '../../core';
import { UIContext, UIContextState } from '../ui-context';
import { ChannelsList } from './channels-list';

const styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};

export interface ChannelsDialogProps {
    action: UserChannelSelectDialogAction;
    onConfirm: (selectedChannelUuids: string[]) => void;
}

export class ChannelsDialog extends Component<ChannelsDialogProps, never> {
    onConfirm = () => {
        this.props.onConfirm([]);
    };

    renderDialog = (uiContext?: UIContextState) => {
        if (undefined === uiContext) {
            return null;
        }

        const { action } = this.props;
        const classes = `kumulos-channel-dialog-container kumulos-prompt-position-${action.dialogConfig.position}`;

        const { heading, confirmAction } = action.dialogConfig.labels;
        const {
            bg,
            fg,
            confirmActionBg,
            confirmActionFg
        } = action.dialogConfig.colors;

        const containerStyle = {
            backgroundColor: bg,
            color: fg
        };

        const confirmActionStyle = {
            backgroundColor: confirmActionBg,
            color: confirmActionFg
        };

        const iconStyle = {
            ...styles.iconStyle,
            backgroundImage: `url(${uiContext?.platformConfig.iconUrl})`
        };

        return (
            <div style={containerStyle} className={classes}>
                <div
                    style={iconStyle}
                    className="kumulos-channel-dialog-icon"
                ></div>

                <div className="kumulos-channel-dialog-content">
                    <div className="kumulos-channel-dialog-header">
                        <h1>{heading}</h1>
                    </div>
                    <div className="kumulos-channel-dialog-body">
                        <ChannelsList channels={uiContext.channelList} />
                    </div>
                </div>

                <div className="kumulos-channel-dialog-actions">
                    <button
                        type="button"
                        style={confirmActionStyle}
                        className="kumulos-action-button kumulos-action-button-confirm"
                        onClick={this.onConfirm}
                    >
                        {confirmAction}
                    </button>
                </div>
            </div>
        );
    };

    render() {
        return <UIContext.Consumer>{this.renderDialog}</UIContext.Consumer>;
    }
}
