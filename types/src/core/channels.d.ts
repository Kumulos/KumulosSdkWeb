import { Context, PropsObject } from '.';
export interface Channel {
    uuid: string;
    name?: string;
    subscribed: Boolean;
    meta?: PropsObject | null;
}
export interface ChannelSpec {
    uuid: string;
    subscribe: boolean;
    meta?: PropsObject | null;
    name?: string;
    showInPortal?: boolean;
}
export declare class ChannelSubscriptionManager {
    private readonly context;
    constructor(ctx: Context);
    private makeSubscriptionRequest;
    /**
     * Subscribes to the channels given by unique ID
     */
    subscribe(uuids: string[]): Promise<Response>;
    /**
     * Unsubscribes from the channels given by unique ID
     */
    unsubscribe(uuids: string[]): Promise<Response>;
    /**
     * Sets the current installations channel subscriptions to those given by unique ID.
     *
     * Any other subscriptions will be removed.
     */
    setSubscriptions(uuids: string[]): Promise<Response>;
    /**
     * Clears all of the existing installation's channel subscriptions
     */
    clearSubscriptions(): Promise<Response>;
    /**
     * Lists the channels available to this installation along with subscription status
     */
    listChannels(): Promise<Channel[]>;
    /**
     * Creates a push channel and optionally subscribes the current installation.
     *
     * Name is optional, but required if showInPortal is true.
     */
    createChannel(channelSpec: ChannelSpec): Promise<Channel>;
}
