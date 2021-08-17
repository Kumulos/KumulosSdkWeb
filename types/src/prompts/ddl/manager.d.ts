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
    private activeConfigs?;
    private readonly triggerFilter;
    constructor(ctx: Context, rootFrame: RootFrame);
    private onBannerConfirm;
    private onBannerCancelled;
    private hidePrompt;
    private performClientRedirection;
    private setState;
    private onEnter;
    private render;
    private renderEmpty;
    private updateActiveConfigs;
    private loadConfig;
}
