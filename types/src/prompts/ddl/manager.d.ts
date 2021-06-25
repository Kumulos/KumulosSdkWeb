import { Context } from '../../core/index';
import RootFrame from '../../core/root-frame';
export declare enum DdlManagerState {
    LOADING = "loading",
    READY = "ready"
}
export default class DdlManager {
    private readonly context;
    private readonly ddlContainer;
    private config?;
    constructor(ctx: Context, rootFrame: RootFrame);
    private onBannerConfirm;
    private onBannerCancelled;
    private hidePrompt;
    private setState;
    private performConfirmAction;
    private onEnter;
    private render;
    private renderEmpty;
}
