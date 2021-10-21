import { Component, Fragment, h, JSX } from 'preact';

import {
    PushPromptConfig,
    PromptTypeName,
    AlertPromptConfig,
    BannerPromptConfig,
    PromptAction,
    UserChannelSelectInlineAction,
    ChannelListItem
} from '../core';
import { PromptManagerState } from '.';
import { PushSubscriptionState } from '../core/push';
import { createPortal } from 'preact/compat';
import { isMobile } from '../core/utils';
import { Bell } from './bell';
import { Dialog } from './dialog';
import { ChannelsDialog } from './dialog/channels-dialog';
import { BackgroundMask } from './overlay/background-mask';
import { Overlay } from './overlay/push-perms';
import { OverlaySilent } from './overlay/push-perms-silent';

export const DEFAULT_SUBSCRIBE_LABEL = 'Subscribe for notifications';

export function inversePosition(pos: string): 'left' | 'right' {
    return pos.indexOf('left') > -1 ? 'right' : 'left';
}

export interface PromptUiProps<T extends PushPromptConfig> {
    config: T;
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (
        prompt: PushPromptConfig,
        channelSelections?: ChannelListItem[]
    ) => void;
    onPromptDeclined: (prompt: PushPromptConfig) => void;
    action?: UserChannelSelectInlineAction;
}

interface TooltipProps {
    position: 'left' | 'right';
}

export class Tooltip extends Component<TooltipProps, never> {
    render() {
        return (
            <div
                class={`kumulos-tooltip kumulos-tooltip-${this.props.position}`}
            >
                {this.props.children}
            </div>
        );
    }
}

class Toast extends Component<{ message: string }, never> {
    render() {
        return <div class="kumulos-toast">{this.props.message}</div>;
    }
}

interface UiProps {
    prompts: PushPromptConfig[];
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (
        prompt: PushPromptConfig,
        channelSelections?: ChannelListItem[]
    ) => void;
    onPromptDeclined: (prompt: PushPromptConfig) => void;
    onPostActionConfirm: (
        prompt: PushPromptConfig,
        channelSelections?: ChannelListItem[]
    ) => void;
    currentlyRequestingPrompt?: PushPromptConfig;
    currentPostAction?: PromptAction;
}

interface UiState {
    toastQueue: string[];
}

export default class Ui extends Component<UiProps, UiState> {
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

                {!isMobile() && (
                    <OverlaySilent
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
        if (
            'requesting' === this.props.promptManagerState ||
            'requesting-silent' === this.props.promptManagerState
        ) {
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

    renderPrompt(prompt: PushPromptConfig) {
        if (
            'requesting' === this.props.promptManagerState ||
            'requesting-silent' === this.props.promptManagerState
        ) {
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
