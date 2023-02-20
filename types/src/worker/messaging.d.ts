import { PushPayload } from '../core/push';
export declare enum WorkerMessageType {
    KPushReceived = "KPushReceived"
}
export type WorkerMessage = {
    type: WorkerMessageType.KPushReceived;
    data: PushPayload;
};
export declare function isKumulosWorkerMessage(data: any): data is WorkerMessage;
