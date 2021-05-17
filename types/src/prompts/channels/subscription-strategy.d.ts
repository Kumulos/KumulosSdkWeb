import { ChannelSubscriptionManager } from '../../core/channels';
import { PromptConfig, PromptAction } from '../../core';
import { PromptManager } from '..';
export declare enum ChannelSubscriptionStrategyStatus {
    Handled = 0,
    Unhandled = 1
}
export interface ChannelSubscriptionStrategyResult {
    status: ChannelSubscriptionStrategyStatus;
    action?: PromptAction;
}
export interface ChannelSubscriptionStrategy {
    handlePromptActions(prompt: PromptConfig): Promise<ChannelSubscriptionStrategyResult>;
}
export declare class SubscribeToChannelStrategy implements ChannelSubscriptionStrategy {
    private promptManager;
    private channelManager;
    constructor(promptManager: PromptManager, channelManager: ChannelSubscriptionManager);
    handlePromptActions(prompt: PromptConfig): Promise<ChannelSubscriptionStrategyResult>;
}
export declare class DialogChannelSubscriptionStrategy implements ChannelSubscriptionStrategy {
    constructor();
    handlePromptActions(prompt: PromptConfig): Promise<ChannelSubscriptionStrategyResult>;
}
