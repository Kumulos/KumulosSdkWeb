import { h, render } from 'preact';
import { Context, DDLPromptConfig, PromptConfig } from '../../core/index';
import RootFrame, { RootFrameContainer } from '../../core/root-frame';
import Ui from './ui';
import { loadDDLConfig } from '../../core/config';
import { maybePersistReminder, isPromptSuppressed } from '../prompt-reminder';
import { deferPromptActivation } from '../../core/utils';

export enum DDLManagerState {
    LOADING = 'loading',
    READY = 'ready'
}

export default class DDLManager {
    private readonly context: Context;
    private readonly ddlContainer: RootFrameContainer;
    private config?: DDLPromptConfig[];

    constructor(ctx: Context, rootFrame: RootFrame) {
        this.ddlContainer = rootFrame.createContainer('ddl');
        this.context = ctx;

        console.info('DDLManager: initialising');

        this.setState(DDLManagerState.LOADING);
    }

    private onBannerConfirm = (prompt: DDLPromptConfig) => {
        this.hidePrompt(prompt);

        window.location.href = prompt.storeUrl;
    };

    private onBannerCancelled = (prompt: DDLPromptConfig) => {
        maybePersistReminder(prompt);
        this.hidePrompt(prompt);
    };

    private hidePrompt(prompt: DDLPromptConfig) {
        this.config = this.config?.filter(c => c.uuid !== prompt.uuid);
        this.setState(DDLManagerState.READY);
    }

    private setState(state: DDLManagerState) {
        console.info('Setting DDL manager state:' + state);
        this.onEnter(state);
    }

    private async onEnter(state: DDLManagerState) {
        switch (state) {
            case DDLManagerState.LOADING:
                this.config = await loadDDLConfig(this.context);
                this.setState(DDLManagerState.READY);
                break;
            case DDLManagerState.READY:
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
                config={prompt as DDLPromptConfig}
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
