import { Context } from '../core';
import RootFrame from '../core/root-frame';
export default class InAppMessageManager {
    private context;
    private installId?;
    private isPolling;
    private currentMessage;
    private readonly container;
    constructor(context: Context, rootFrame: RootFrame);
    private startPollForMessages;
    private pollForMessages;
    private url;
    private renderInApp;
}
