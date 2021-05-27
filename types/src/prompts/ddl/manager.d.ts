import { Context } from '../../core/index';
import RootFrame from '../../core/root-frame';
export declare enum DDLManagerState {
    LOADING = "loading",
    READY = "ready"
}
export default class DDLManager {
    private readonly context;
    private readonly ddlContainer;
    private config?;
    constructor(ctx: Context, rootFrame: RootFrame);
    private onBannerConfirm;
    private onBannerCancelled;
    private hidePrompt;
    private setState;
    private onEnter;
    private render;
    private renderEmpty;
}
