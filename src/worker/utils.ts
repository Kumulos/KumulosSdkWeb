import { Configuration, WorkerMessage } from '../core';

// Little bit of a hack, see: https://github.com/Microsoft/TypeScript/issues/14877#issuecomment-340279293
declare var self: ServiceWorkerGlobalScope & { KUMULOS_INIT?: Configuration };

export function postEventToClient(event: WorkerMessage, client: Client): void {
    client.postMessage(event);
}

export function broadcastFromWorker(event: WorkerMessage): Promise<void> {
    const postEvent = (client: Client) => postEventToClient(event, client);

    return self.clients.matchAll().then(clients => {
        clients.forEach(postEvent);
    });
}
