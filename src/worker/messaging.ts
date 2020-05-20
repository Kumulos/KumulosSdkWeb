import { PushPayload } from '../core/push';

export enum WorkerMessageType {
    KPushReceived = 'KPushReceived'
}
export type WorkerMessage = {
    type: WorkerMessageType.KPushReceived;
    data: PushPayload;
};

export function isKumulosWorkerMessage(data: any): data is WorkerMessage {
    return (
        (data as WorkerMessage).type !== undefined &&
        WorkerMessageType[(data as WorkerMessage).type] !== undefined
    );
}
