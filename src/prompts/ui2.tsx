import { Component, Fragment, h, JSX } from 'preact';

import {
    PushPromptConfig,
    PromptTypeName,
    AlertPromptConfig,
    BannerPromptConfig,
    PromptAction,
    UserChannelSelectInlineAction,
    ChannelListItem,
    PromptConfig
} from '../core';
import { PromptManager } from '../core';
import { createPortal } from 'preact/compat';
import { isMobile } from '../core/utils';
import { Bell } from './bell';
import { Dialog } from './dialog';
import { ChannelsDialog } from './dialog/channels-dialog';
import { Overlay, Toast, BackgroundMask } from './ui';

interface UiProps {
    prompts: PromptConfig[];
    managers: PromptManager[];
    onPromptAccepted: (
        prompt: PushPromptConfig,
        channelSelections?: ChannelListItem[]
    ) => void;
    onPromptDeclined: (prompt: PushPromptConfig) => void;
    prompt?: PromptConfig;
    currentPostAction?: PromptAction;
}

interface UiState {
    toastQueue: string[];
}

export default class Ui2 extends Component<UiProps, UiState> {
    constructor(props: UiProps) {
        super(props);

        this.state = {
            toastQueue: []
        };
    }

    dequeueToast = () => {
        this.setState({
            toastQueue: this.state.toastQueue.slice(1)
        });
    };

    showToast(message?: string) {
        if (!message || !message.length) {
            return;
        }

        this.setState({
            toastQueue: [...this.state.toastQueue, message]
        });

        setTimeout(this.dequeueToast, 3200);
    }

    render() {
        return createPortal(
            <Fragment>
                {this.maybeRenderPromptBackgroundMask()}

                {this.props.prompts.map(this.renderPrompt, this)}

                {this.renderPostAction()}

                {!isMobile() && (
                    <Overlay
                        promptState={this.props.promptManagerState}
                        prompt={this.props.currentlyRequestingPrompt}
                        subscriptionState={this.props.subscriptionState}
                    />
                )}
                {this.state.toastQueue.length > 0 && (
                    <Toast message={this.state.toastQueue[0]} />
                )}
            </Fragment>,
            document.body
        );
    }

    maybeRenderPromptBackgroundMask() {
        if ('requesting' === this.props.promptManagerState) {
            return null;
        }

        const { prompts } = this.props;

        const firstPromptWithMask = prompts.filter(
            p =>
                (p.type === PromptTypeName.ALERT ||
                    p.type === PromptTypeName.BANNER) &&
                !!p.backgroundMask
        )[0] as AlertPromptConfig | BannerPromptConfig;

        if (!firstPromptWithMask) {
            return null;
        }

        const style = {
            backgroundColor: firstPromptWithMask.backgroundMask!.colors.bg
        };

        return <BackgroundMask style={style} />;
    }

    renderPrompt(prompt: PromptConfig) {
        if ('requesting' === this.props.promptManagerState) {
            return null;
        }

        if ('postaction' === this.props.promptManagerState) {
            return null;
        }

        switch (prompt.type) {
            case 'bell':
                return (
                    <Bell
                        config={prompt}
                        subscriptionState={this.props.subscriptionState}
                        promptManagerState={this.props.promptManagerState}
                        onPromptAccepted={this.props.onPromptAccepted}
                        onPromptDeclined={this.props.onPromptDeclined}
                    />
                );
            case 'alert':
            case 'banner':
                let action: UserChannelSelectInlineAction | undefined;

                if (prompt.type === PromptTypeName.ALERT) {
                    action = prompt.actions?.find<
                        UserChannelSelectInlineAction
                    >(
                        (
                            action: PromptAction
                        ): action is UserChannelSelectInlineAction =>
                            action.type === 'userChannelSelectInline'
                    );
                }

                return (
                    <Dialog
                        config={prompt}
                        subscriptionState={this.props.subscriptionState}
                        promptManagerState={this.props.promptManagerState}
                        onPromptAccepted={this.props.onPromptAccepted}
                        onPromptDeclined={this.props.onPromptDeclined}
                        action={action}
                    />
                );
            default:
                return null;
        }
    }

    renderPostAction() {
        const {
            promptManagerState,
            currentPostAction,
            currentlyRequestingPrompt
        } = this.props;

        if ('postaction' !== promptManagerState) {
            return null;
        }

        if (!currentlyRequestingPrompt) {
            return null;
        }

        if ('userChannelSelectDialog' !== currentPostAction?.type) {
            return null;
        }

        let backgroundMask = null;

        if (
            (currentlyRequestingPrompt.type === PromptTypeName.ALERT ||
                currentlyRequestingPrompt.type === PromptTypeName.BANNER) &&
            undefined !== currentlyRequestingPrompt.backgroundMask
        ) {
            const maskConfig = currentlyRequestingPrompt.backgroundMask;
            backgroundMask = (
                <BackgroundMask
                    style={{ backgroundColor: maskConfig.colors.bg }}
                />
            );
        }

        return (
            <Fragment>
                {backgroundMask}
                <ChannelsDialog
                    action={currentPostAction}
                    onConfirm={channelSelections => {
                        this.props.onPostActionConfirm(
                            currentlyRequestingPrompt,
                            channelSelections
                        );
                    }}
                />
            </Fragment>
        );
    }
}
