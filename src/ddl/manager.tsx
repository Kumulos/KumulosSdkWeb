import { h, render } from 'preact';
import Kumulos from '../index';
import { Context, PromptPosition } from '../core/index';
import RootFrame, { RootFrameContainer } from '../core/root-frame';
import Ui from './ui';
import { DDLConfig } from './config';
import { isMobile, onDOMReady } from '../core/utils';
import { fetchDDLConfig } from './api';

export enum DDLManagerState {
    LOADING = 'loading',
    READY = 'ready'
}

export default class DDLManager {
    private readonly kumulosClient: Kumulos;
    private readonly context: Context;
    private readonly rootContainer: RootFrameContainer;
    private containerEl?: HTMLDivElement;

    private state?: DDLManagerState;
    private config?: DDLConfig[];

    constructor(client: Kumulos, ctx: Context, rootFrame: RootFrame) {
        this.rootContainer = rootFrame.createContainer('ddl');
        this.kumulosClient = client;
        this.context = ctx;

        console.info('DDLManager: initialising');

        onDOMReady(() => {
            this.createInjectionContainer();
            this.setState(DDLManagerState.LOADING);
        });
    }

    private createInjectionContainer() {
        this.containerEl = document.createElement('div');
        this.containerEl.className = 'kumulos-ddl-injection-container';

        document.body.prepend(this.containerEl);
    }

    private onBannerConfirm = (config: DDLConfig) => {
        console.log('redirect', config);
    };

    private onBannerCancelled = (config: DDLConfig) => {
        console.log('cancel', config);
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

                const config = this.config?.shift();
                if (!config) {
                    console.error('DDLManager: failed to render ui, no config');
                    break;
                }

                setTimeout(() => this.render(config), 2000);

                break;
        }
    }

    private render(config: DDLConfig) {
        render(
            <Ui
                config={config}
                onBannerConfirm={this.onBannerConfirm}
                onBannerCancelled={this.onBannerCancelled}
            />,
            this.rootContainer.element
        );
    }

    private async loadDDLConfig() {
        this.config = await fetchDDLConfig(this.context);
    }
}
