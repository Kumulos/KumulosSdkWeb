import { h, render } from 'preact';
import copy from 'clipboard-copy';
import { Context, DdlPromptConfig, PromptConfig, DdlUiActions, UiActionType } from '../../core/index';
import RootFrame, { RootFrameContainer } from '../../core/root-frame';
import Ui from './ui';
import { loadDdlConfig } from '../../core/config';
import { maybePersistReminder, isPromptSuppressed } from '../prompt-reminder';
import { deferPromptActivation } from '../utils';

export enum DdlManagerState {
    LOADING = 'loading',
    READY = 'ready'
}

export default class DdlManager {
    private readonly context: Context;
    private readonly ddlContainer: RootFrameContainer;
    private config?: DdlPromptConfig[];

    constructor(ctx: Context, rootFrame: RootFrame) {
        this.ddlContainer = rootFrame.createContainer('ddl');
        this.context = ctx;

        console.info('DdlManager: initialising');

        this.setState(DdlManagerState.LOADING);
    }

    private onBannerConfirm = (prompt: DdlPromptConfig) => {
        this.performConfirmAction(prompt);
        this.hidePrompt(prompt);
    };

    private onBannerCancelled = (prompt: DdlPromptConfig) => {
        maybePersistReminder(prompt);
        this.hidePrompt(prompt);
    };

    private hidePrompt(prompt: DdlPromptConfig) {
        this.config = this.config?.filter(c => c.uuid !== prompt.uuid);
        this.setState(DdlManagerState.READY);
    }

    private setState(state: DdlManagerState) {
        console.info('Setting DdlManager state:' + state);
        this.onEnter(state);
    }

    private performConfirmAction(prompt: DdlPromptConfig) {
        const { uiActions: {accept} } = prompt as DdlUiActions;

        switch (accept.type) {
            case UiActionType.DDL_OPEN_STORE:
                copy(accept.deepLinkUrl);
                window.location.href = accept.url;
            default:
                return console.error(
                    `Unsupported accept action type ${accept.type} supported for prompt ${prompt.uuid}`
                );
        }
    }

    private async onEnter(state: DdlManagerState) {
        switch (state) {
            case DdlManagerState.LOADING:
                this.config = await loadDdlConfig(this.context);

                if (!this.config) {
                    return;
                }

                this.setState(DdlManagerState.READY);
                break;
            case DdlManagerState.READY:
                const prompt = this.config?.shift();

                if (!prompt) {
                    this.renderEmpty();
                    break;
                }

                const isSuppressed = await isPromptSuppressed(prompt);
                if (isSuppressed) {
                    break;
                }

                if (!deferPromptActivation(prompt, this.render)) {
                    this.render(prompt);
                }

                break;
        }
    }

    private render = (prompt: PromptConfig) => {
        render(
            <Ui
                config={prompt as DdlPromptConfig}
                onBannerConfirm={this.onBannerConfirm}
                onBannerCancelled={this.onBannerCancelled}
            />,
            this.ddlContainer.element
        );
    };

    private renderEmpty() {
        render(null, this.ddlContainer.element);
    }
}
