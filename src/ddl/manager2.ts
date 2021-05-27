import { h, render } from 'preact';
import Kumulos from '../index';
import {
    Context,
    DDLPromptConfig,
    PromptConfig,
    PromptConfigs,
    PromptTypeName
} from '../core/index';
import RootFrame, { RootFrameContainer } from '../core/root-frame';
import Ui from './ui';
import { PromptManager } from '../core';
import { loadDDLConfig } from '../core/config';
import { persistDDLConfig } from '../core/storage';

export enum DDLPromptManagerState {
    LOADING = 'loading',
    READY = 'ready',
    HANDLED = 'handled'
}

export default class DDLPromptManager implements PromptManager {
    private readonly context: Context;
    private readonly rootContainer: RootFrameContainer;

    private state!: DDLPromptManagerState;
    private config?: DDLPromptConfig[];
    private currentConfig?: DDLPromptConfig;

    private renderPromptCallback?: (prompt?: PromptConfig) => void;
    private promptLoadCallback?: (prompts: PromptConfigs) => void;

    constructor(ctx: Context, rootFrame: RootFrame) {
        this.rootContainer = rootFrame.createContainer('ddl');
        this.context = ctx;

        console.info('DDLManager: initialising');

        this.setState(DDLPromptManagerState.LOADING);
    }

    registerForPromptRender(cb: (prompt?: PromptConfig) => void) {
        this.renderPromptCallback = cb;
    }

    registerForPromptLoad(cb: (prompts: PromptConfigs) => void) {
        this.promptLoadCallback = cb;
    }

    load() {
        this.setState(DDLPromptManagerState.LOADING);
    }

    onPromptConfirm(config: PromptConfig) {
        if (config.type !== PromptTypeName.BANNER_DL) {
            return;
        }

        this.setState(DDLPromptManagerState.HANDLED);

        window.location.href = config.storeUrl;
    }

    onPromptCancelled(config: PromptConfig) {
        this.setState(DDLPromptManagerState.HANDLED);
    }

    private setState(state: DDLPromptManagerState) {
        console.info('Setting DDL manager state:' + state);
        this.state = state;
        this.onEnter(state);
    }

    private async onEnter(state: DDLPromptManagerState) {
        switch (state) {
            case DDLPromptManagerState.LOADING:
                this.config = await loadDDLConfig(this.context);

                if (!this.config) {
                    return;
                }

                const configs = this.config?.reduce<PromptConfigs>(
                    (configs, current) => {
                        configs[current.uuid] = current;
                        return configs;
                    },
                    {}
                );

                this.promptLoadCallback?.(configs);
                this.setState(DDLPromptManagerState.READY);
                break;
            case DDLPromptManagerState.READY:
                // TODO - new state for managing multiples as precondition state for 'READY'
                // using a single (first) config for now

                this.currentConfig = this.config?.shift();

                this.renderPromptCallback?.(this.currentConfig);

                break;
            case DDLPromptManagerState.HANDLED:
                this.config = this.config?.filter(
                    c => c.uuid !== this.currentConfig?.uuid
                );

                if (this.config) {
                    persistDDLConfig(this.config);
                }

                this.setState(DDLPromptManagerState.READY);

                break;
        }
    }
}
