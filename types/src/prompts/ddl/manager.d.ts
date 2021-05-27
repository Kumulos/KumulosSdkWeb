import { Context } from '../../core/index';
import RootFrame from '../../core/root-frame';
export declare enum DDLManagerState {
    LOADING = "loading",
    READY = "ready",
    HANDLED = "handled"
}
export default class DDLManager {
    private readonly context;
    private readonly rootContainer;
    private state;
    private config?;
    private prompt?;
    constructor(ctx: Context, rootFrame: RootFrame);
    private onBannerConfirm;
    private onBannerCancelled;
    private setState;
    private onEnter;
    private render;
    private loadDDLConfig;
}
