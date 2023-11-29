import {
    Context,
    DdlPromptConfig,
    KumulosEvent,
    PromptConfig,
    UiActionType
} from '../../core/index';
import RootFrame, { RootFrameContainer } from '../../core/root-frame';
import {
    deleteDdlBannerConfigFromCache,
    loadDdlConfig
} from '../../core/config';
import { h, render } from 'preact';

import { FingerprintComponents } from '../../fp/types';
import { PromptTriggerEventFilter } from '../triggers';
import Ui from './ui';
import { deferPromptActivation } from '../utils';
import { maybePersistReminder } from '../prompt-reminder';
import { sendClickRequest } from '../../fp';

export enum DdlManagerState {
    LOADING = 'loading',
    READY = 'ready'
}

export default class DdlManager {
    private readonly context: Context;
    private readonly ddlContainer: RootFrameContainer;
    private config?: Record<string, DdlPromptConfig>;
    private activeConfigs?: DdlPromptConfig[] = [];
    private readonly triggerFilter: PromptTriggerEventFilter<DdlPromptConfig>;

    constructor(ctx: Context, rootFrame: RootFrame) {
        console.info('DdlManager: initialising');

        this.ddlContainer = rootFrame.createContainer('ddl');
        this.context = ctx;

        this.triggerFilter = new PromptTriggerEventFilter<DdlPromptConfig>(
            ctx,
            (_: KumulosEvent) => {
                this.updateActiveConfigs();
                this.setState(DdlManagerState.READY);
            }
        );

        this.setState(DdlManagerState.LOADING);
    }

    private onBannerConfirm = async (
        prompt: DdlPromptConfig,
        components?: FingerprintComponents
    ) => {
        if (!!components) {
            await sendClickRequest(this.context, prompt.uuid, components);
        }

        await deleteDdlBannerConfigFromCache(prompt.uuid);

        this.hidePrompt(prompt);

        this.performClientRedirection(prompt);
    };

    private onBannerCancelled = (prompt: DdlPromptConfig) => {
        maybePersistReminder(prompt);
        this.hidePrompt(prompt);
    };

    private hidePrompt(prompt: DdlPromptConfig) {
        this.activeConfigs = this.activeConfigs?.filter(
            c => c.uuid !== prompt.uuid
        );
        this.setState(DdlManagerState.READY);
    }

    private performClientRedirection(config: DdlPromptConfig) {
        const acceptAction = config.uiActions.accept;

        switch (acceptAction.type) {
            case UiActionType.DDL_OPEN_STORE:
                window.location.href = acceptAction.url;
                break;
            case UiActionType.DDL_OPEN_DEEPLINK:
                window.location.href = acceptAction.deepLinkUrl;
                break;
            default:
                console.error(
                    'DdlManager.performClientRedirection: Unsupported accept action type, unable to perform redirection'
                );
        }
    }

    private setState(state: DdlManagerState) {
        console.info('Setting DdlManager state:' + state);
        this.onEnter(state);
    }

    private async onEnter(state: DdlManagerState) {
        switch (state) {
            case DdlManagerState.LOADING:
                this.config = await this.loadConfig();

                if (!this.config) {
                    return;
                }

                this.setState(DdlManagerState.READY);
                break;
            case DdlManagerState.READY:
                await this.updateActiveConfigs();

                const prompt = this.activeConfigs?.shift();

                if (!prompt) {
                    this.renderEmpty();
                    return;
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
                context={this.context}
                onBannerConfirm={this.onBannerConfirm}
                onBannerCancelled={this.onBannerCancelled}
            />,
            this.ddlContainer.element
        );
    };

    private renderEmpty() {
        render(null, this.ddlContainer.element);
    }

    private async updateActiveConfigs() {
        if (!this.config) {
            return;
        }

        const matchedConfigs = await this.triggerFilter.filterPrompts(
            this.config
        );

        matchedConfigs.forEach(c => {
            if (this.activeConfigs?.indexOf(c) !== -1) {
                return;
            }

            this.activeConfigs.push(c);
        });
    }

    private async loadConfig(): Promise<
        Record<string, DdlPromptConfig> | undefined
    > {
        const configs = await loadDdlConfig(this.context);

        if (undefined === configs) {
            return;
        }

        return configs.reduce<Record<string, DdlPromptConfig>>((bag, c) => {
            bag[c.uuid] = c;
            return bag;
        }, {});
    }
}
