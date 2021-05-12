import { ChannelSubscriptionManager } from '../../core/channels';
import { PromptConfig, ChannelSubAction, PromptAction } from '../../core';
import { PromptManager } from '..';

export interface ChannelSubscriptionStrategy {
    subscribe(
        promptMananger: PromptManager,
        channelManager: ChannelSubscriptionManager,
        prompt: PromptConfig
    ): void;
}

export class SubscribeToChannelStrategy implements ChannelSubscriptionStrategy {
    public async subscribe(
        promptManager: PromptManager,
        channelManager: ChannelSubscriptionManager,
        prompt: PromptConfig
    ): Promise<void> {
        if (!prompt.actions?.length) {
            return;
        }

        const actions = prompt.actions.filter<ChannelSubAction>(
            (action: PromptAction): action is ChannelSubAction =>
                action.type === 'subscribeToChannel'
        );

        const currentChannels = promptManager.getChannels();

        const uuidsToSubscribe = actions
            .filter(action => {
                const channeltoSub = currentChannels.find(
                    c => c.uuid === action.channelUuid && c.subscribed === false
                );

                if (undefined === channeltoSub) {
                    console.info(
                        `Unable to subscribe to channel '${action.channelUuid}' as it does not exist`
                    );
                    return false;
                }

                return true;
            })
            .map(action => action.channelUuid);

        await channelManager.subscribe(uuidsToSubscribe);
    }
}

export class DialogChannelSubscriptionStrategy
    implements ChannelSubscriptionStrategy {
    public async subscribe(
        promptManager: PromptManager,
        channelManager: ChannelSubscriptionManager,
        prompt: PromptConfig
    ): Promise<void> {
        if (!prompt.actions?.length) {
            return;
        }
    }
}

const CHANNEL_STRATEGIES = [
    new SubscribeToChannelStrategy(),
    new DialogChannelSubscriptionStrategy()
];

export async function handleChannelSubscriptionStrategies(
    promptManager: PromptManager,
    channelManager: ChannelSubscriptionManager,
    prompt: PromptConfig
) {
    for (let i = 0; i < CHANNEL_STRATEGIES.length; i++) {
        await CHANNEL_STRATEGIES[i].subscribe(
            promptManager,
            channelManager,
            prompt
        );
    }
}
