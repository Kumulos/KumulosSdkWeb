import { Component, h } from 'preact';
import { ChannelListItem } from '../../core';

interface ChannelListProps {
    channelList: ChannelListItem[];
    onChannelSelectionChanged: (channelList: ChannelListItem[]) => void;
}

interface ChannelListState {
    channels: ChannelListItem[];
}

export class ChannelsList extends Component<
    ChannelListProps,
    ChannelListState
> {
    constructor(props: ChannelListProps) {
        super(props);

        this.state = {
            channels: [...this.props.channelList]
        };

        this.props.onChannelSelectionChanged(this.state.channels);
    }

    onChannelCheckChange(channelUuid: string, checked: boolean) {
        const item = this.state.channels.find(
            c => c.channel.uuid === channelUuid
        );
        item!.checked = checked;

        this.setState(
            {
                channels: [...this.state.channels]
            },
            () => this.props.onChannelSelectionChanged(this.state.channels)
        );
    }

    render() {
        const { channels } = this.state;

        if (!channels.length) {
            return null;
        }

        return (
            <div class="kumulos-channel-list-container">
                {channels.map(item => (
                    <label
                        key={item.channel.uuid}
                        className="kumulos-checkbox-container"
                    >
                        {item.channel.name}
                        <input
                            type="checkbox"
                            readOnly
                            checked={item.checked}
                            onClick={(
                                e: h.JSX.TargetedEvent<HTMLInputElement>
                            ) => {
                                this.onChannelCheckChange(
                                    item.channel.uuid,
                                    e.currentTarget.checked
                                );
                            }}
                        />
                        <span className="kumulos-checkbox"></span>
                    </label>
                ))}
            </div>
        );
    }
}
