import { h, render, Fragment } from 'preact';
import { Context, DdlPromptConfig, PromptConfig, UiActionType, SdkEvent, DdlBannerPromptConfig } from '../../core/index';
import RootFrame, { RootFrameContainer } from '../../core/root-frame';
import Ui from './ui';
import { loadDdlConfig, deleteDdlBannerConfigFromCache } from '../../core/config';
import { maybePersistReminder, isPromptSuppressed } from '../prompt-reminder';
import { deferPromptActivation } from '../utils';
import { sendClickRequest } from '../../fp';
import { FingerprintComponents } from '../../fp/types';
import { PromptTriggerEventFilter } from '../triggers';

export enum DdlManagerState {
    LOADING = 'loading',
    READY = 'ready'
}

export default class DdlManager {
    private readonly context: Context;
    private readonly ddlContainer: RootFrameContainer;
    private config?: DdlPromptConfig[];
    private readonly triggerFilter: PromptTriggerEventFilter<DdlPromptConfig>;

    constructor(ctx: Context, rootFrame: RootFrame) {
        console.info('DdlManager: initialising');

        this.ddlContainer = rootFrame.createContainer('ddl');
        this.context = ctx;

        this.triggerFilter = new PromptTriggerEventFilter<DdlPromptConfig>(
            ctx,
            (_: SdkEvent) => this.setState(DdlManagerState.LOADING)
        );

        this.setState(DdlManagerState.LOADING);
    }

    private onBannerConfirm = async (prompt: DdlPromptConfig, components?: FingerprintComponents) => {
        if (!!components) {
            await sendClickRequest(this.context, prompt.uuid, components);
        }

        await deleteDdlBannerConfigFromCache(prompt.uuid);

        this.hidePrompt(prompt);

        const acceptAction = prompt.uiActions.accept;

        const redirectUrl = acceptAction.type === UiActionType.DDL_OPEN_STORE
            ? acceptAction.url
            : acceptAction.deepLinkUrl;

        window.location.href = redirectUrl;
    }

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

    private async onEnter(state: DdlManagerState) {
        switch (state) {
            case DdlManagerState.LOADING:
                const configs = await loadDdlConfig(this.context);

                if (!configs) {
                    return;
                }

                this.config = await this.triggerFilter.filterPrompts(
                    configs.reduce<Record<string, DdlBannerPromptConfig>>((bag, c) => {
                        bag[c.uuid] = c;
                        return bag;
                    }, {})
                );

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
}
