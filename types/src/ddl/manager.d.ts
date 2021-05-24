import Kumulos from '../index';
import { Context } from '../core/index';
import RootFrame from '../core/root-frame';
export declare enum DDLManagerState {
    LOADING = "loading",
    READY = "ready"
}
export default class DDLManager {
    private readonly kumulosClient;
    private readonly context;
    private readonly rootFrame;
    private containerEl?;
    private state?;
    private config?;
    constructor(client: Kumulos, ctx: Context, rootFrame: RootFrame);
    private createInjectionContainer;
    private onBannerConfirm;
    private onBannerCancelled;
    private setState;
    private onEnter;
    private render;
    private loadDDLConfig;
}
