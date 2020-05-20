import { WorkerMessage } from '../core';
export declare function postEventToClient(event: WorkerMessage, client: Client): void;
export declare function broadcastFromWorker(event: WorkerMessage): Promise<void>;
