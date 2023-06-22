import { Context, PropsObject, Service, getInstallId } from '.';
import { performFetch, performJsonFetch } from './utils';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

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

export class ChannelSubscriptionManager {
    private readonly context: Context;

    constructor(ctx: Context) {
        this.context = ctx;
    }

    private makeSubscriptionRequest(
        method: HttpMethod,
        uuids: string[]
    ): Promise<Response> {
        return getInstallId().then(installId => {
            const url = `${this.context.urlForService(
                Service.PUSH
            )}/v1/app-installs/${installId}/channels/subscriptions`;
            const params = {
                uuids
            };

            const options = {
                method,
                body: JSON.stringify(params)
            };

            return performFetch(url, this.context.authHeader, options);
        });
    }

    /**
     * Subscribes to the channels given by unique ID
     */
    subscribe(uuids: string[]): Promise<Response> {
        return this.makeSubscriptionRequest('POST', uuids);
    }

    /**
     * Unsubscribes from the channels given by unique ID
     */
    unsubscribe(uuids: string[]): Promise<Response> {
        return this.makeSubscriptionRequest('DELETE', uuids);
    }

    /**
     * Sets the current installations channel subscriptions to those given by unique ID.
     *
     * Any other subscriptions will be removed.
     */
    setSubscriptions(uuids: string[]): Promise<Response> {
        return this.makeSubscriptionRequest('PUT', uuids);
    }

    /**
     * Clears all of the existing installation's channel subscriptions
     */
    clearSubscriptions(): Promise<Response> {
        return this.setSubscriptions([]);
    }

    /**
     * Lists the channels available to this installation along with subscription status
     */
    listChannels(): Promise<Channel[]> {
        return getInstallId().then(installId => {
            const url = `${this.context.urlForService(
                Service.PUSH
            )}/v1/app-installs/${installId}/channels`;
            return performJsonFetch<Channel[]>(url, this.context.authHeader);
        });
    }

    /**
     * Creates a push channel and optionally subscribes the current installation.
     *
     * Name is optional, but required if showInPortal is true.
     */
    createChannel(channelSpec: ChannelSpec): Promise<Channel> {
        if (
            channelSpec.showInPortal &&
            (!channelSpec.name || !channelSpec.name.length)
        ) {
            return Promise.reject({
                error:
                    'Name is required for channel creation when showInPortal is true'
            });
        }

        return getInstallId().then(installId => {
            const url = `${this.context.urlForService(
                Service.PUSH
            )}/v1/channels`;

            let params = {
                uuid: channelSpec.uuid,
                name: channelSpec.name,
                showInPortal: Boolean(channelSpec.showInPortal),
                meta: channelSpec.meta,
                installId: undefined
            };

            if (channelSpec.subscribe) {
                (params as any).installId = installId;
            }

            const options = {
                method: 'POST',
                body: JSON.stringify(params)
            };

            return performJsonFetch<Channel>(url, this.context.authHeader, options);
        });
    }
}
