import { h, render } from 'preact';
import Kumulos from '../index';
import { Context, DDLPromptConfig } from '../core/index';
import RootFrame, { RootFrameContainer } from '../core/root-frame';
import Ui from './ui';
import { loadDDLConfig } from '../core/config';
import { persistDDLConfig } from '../core/storage';

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
    private currentConfig?: DDLPromptConfig;

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

                this.currentConfig = this.config?.shift();

                if (this.currentConfig) {
                    setTimeout(() => this.render(), 2000);
                } else {
                    this.render();
                }

                break;
            case DDLManagerState.HANDLED:
                this.config = this.config?.filter(
                    c => c.uuid !== this.currentConfig?.uuid
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
                config={this.currentConfig}
                onBannerConfirm={this.onBannerConfirm}
                onBannerCancelled={this.onBannerCancelled}
            />,
            this.rootContainer.element
        );
    }

    private async loadDDLConfig() {
        this.config = await loadDDLConfig(this.context);
        console.log(this.config);

        if (this.config) {
            persistDDLConfig(this.config);
        }
    }
}
