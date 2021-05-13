import { Component, h } from 'preact';
import { Channel } from '../../core/channels';

interface ChannelListProps {
    channels: Channel[];
}

export function ChannelsList(props: ChannelListProps) {
    if (!props.channels.length) {
        return null;
    }

    return (
        <div class="kumulos-channel-list-container">
            {props.channels.map(c => (
                <label key={c.uuid} className="kumulos-checkbox-container">
                    {c.name}
                    <input type="checkbox" readOnly checked={!!c.subscribed} />
                    <span className="kumulos-checkbox"></span>
                </label>
            ))}
        </div>
    );
}
