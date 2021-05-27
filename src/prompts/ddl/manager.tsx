import { h, render } from 'preact';
import Kumulos from '../../index';
import { Context, DDLPromptConfig } from '../../core/index';
import RootFrame, { RootFrameContainer } from '../../core/root-frame';
import Ui from './ui';
import { loadDDLConfig } from '../../core/config';
import { persistDDLConfig } from '../../core/storage';
import { maybePersistReminder, isPromptSuppressed } from '../prompt-reminder';

export enum DDLManagerState {
    LOADING = 'loading',
    READY = 'ready',
    HANDLED = 'handled'
}

export default class DDLManager {
    private readonly context: Context;
    private readonly rootContainer: RootFrameContainer;

    private state!: DDLManagerState;
    private config?: DDLPromptConfig[];
    private prompt?: DDLPromptConfig;

    constructor(ctx: Context, rootFrame: RootFrame) {
        this.rootContainer = rootFrame.createContainer('ddl');
        this.context = ctx;

        console.info('DDLManager: initialising');

        this.setState(DDLManagerState.LOADING);
    }

    private onBannerConfirm = (config: DDLPromptConfig) => {
        this.setState(DDLManagerState.HANDLED);

        window.location.href = config.storeUrl;
    };

    private onBannerCancelled = (config: DDLPromptConfig) => {
        maybePersistReminder(config);
        this.setState(DDLManagerState.HANDLED);
    };

    private setState(state: DDLManagerState) {
        console.info('Setting DDL manager state:' + state);
        this.state = state;
        this.onEnter(state);
    }

    private async onEnter(state: DDLManagerState) {
        switch (state) {
            case DDLManagerState.LOADING:
                await this.loadDDLConfig();
                this.setState(DDLManagerState.READY);
                break;
            case DDLManagerState.READY:
                // TODO - new state for managing multiples as precondition state for 'READY'
                // using a single (first) config for now

                this.prompt = this.config?.shift();

                if (this.prompt && !isPromptSuppressed(this.prompt)) {
                    setTimeout(() => this.render(), 2000);
                } else {
                    this.render();
                }

                break;
            case DDLManagerState.HANDLED:
                this.config = this.config?.filter(
                    c => c.uuid !== this.prompt?.uuid
                );

                if (this.config) {
                    persistDDLConfig(this.config);
                }

                this.setState(DDLManagerState.READY);

                break;
        }
    }

    private render() {
        render(
            <Ui
                config={this.prompt}
                onBannerConfirm={this.onBannerConfirm}
                onBannerCancelled={this.onBannerCancelled}
            />,
            this.rootContainer.element
        );
    }

    private async loadDDLConfig() {
        this.config = await loadDDLConfig(this.context);
        if (this.config) {
            persistDDLConfig(this.config);
        }
    }
}
