import './prompts.scss';

import { Component, Fragment, h, JSX } from 'preact';

import {
    PromptConfig,
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
import { getBrowserName } from '../core/utils';
import { Bell } from './bell';
import { Dialog } from './dialog';
import { ChannelsDialog } from './dialog/channels-dialog';

export const DEFAULT_SUBSCRIBE_LABEL = 'Subscribe for notifications';

export function inversePosition(pos: string): 'left' | 'right' {
    return pos.indexOf('left') > -1 ? 'right' : 'left';
}

export function isMobile(): boolean {
    return /android|iPhone|iPad|iPod|mobile/i.test(navigator.userAgent);
}

export interface PromptUiProps<T extends PromptConfig> {
    config: T;
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (
        prompt: PromptConfig,
        channelSelections?: ChannelListItem[]
    ) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
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

interface OverlayProps {
    promptState: PromptManagerState;
    prompt?: PromptConfig;
    subscriptionState: PushSubscriptionState;
}

class Overlay extends Component<OverlayProps, never> {
    render() {
        const { promptState, prompt, subscriptionState } = this.props;

        if (
            !prompt ||
            promptState !== 'requesting' ||
            !prompt.overlay ||
            subscriptionState !== 'unsubscribed'
        ) {
            return null;
        }

        const overlay = prompt.overlay;
        const style = {
            background: overlay.colors.shade,
            color: overlay.colors.text
        };

        return (
            <BackgroundMask
                style={style}
                // maintains backwards compat with existing blur class that
                // was being applied directly by this component previously
                blurClass="kumulos-overlay-blur"
                class={`kumulos-overlay kumulos-overlay-${getBrowserName()}`}
            >
                <div
                    class="kumulos-overlay-strip"
                    style={{ background: overlay.colors.strip }}
                >
                    <div class="kumulos-overlay-content-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="65"
                            height="35"
                            viewBox="0 0 64 33"
                        >
                            <path
                                fill="none"
                                stroke={overlay.colors.text}
                                stroke-width="2.5px"
                                stroke-linecap="round"
                                d="M 12.57,11.12
           C 12.57,11.12 6.84,20.82 4.13,21.01
             1.42,21.21 20.71,28.67 26.62,28.67M 4.23,21.01
           C 4.23,21.01 53.96,14.91 60.65,3.47"
                            />
                        </svg>
                        {overlay.iconUrl && <img src={overlay.iconUrl} />}
                        <div class="kumulos-overlay-content">
                            <h3>{overlay.labels.heading}</h3>
                            <p>{overlay.labels.body}</p>
                            {overlay.links?.map(l => (
                                <a href={l.url} target="_blank">
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </BackgroundMask>
        );
    }
}

class Toast extends Component<{ message: string }, never> {
    render() {
        return <div class="kumulos-toast">{this.props.message}</div>;
    }
}

interface BackgroundMaskProps {
    class?: string;
    blurClass?: string;
    style?: JSX.CSSProperties;
}

interface BackgroundMaskState {
    blurClasses: string[];
}

class BackgroundMask extends Component<
    BackgroundMaskProps,
    BackgroundMaskState
> {
    constructor(props: BackgroundMaskProps) {
        super(props);

        const blurClasses = this.props.blurClass?.split(' ') ?? [];
        blurClasses.push('kumulos-background-mask-blur');

        this.state = {
            blurClasses
        };
    }

    updateBlurState() {
        const { blurClasses } = this.state;

        blurClasses.forEach(blurClass => {
            if (!document.body.classList.contains(blurClass)) {
                document.body.classList.add(blurClass);
            }
        });
    }

    componentDidMount() {
        this.updateBlurState();
    }

    componentDidUpdate() {
        this.updateBlurState();
    }

    componentWillUnmount() {
        this.state.blurClasses.forEach(blurClass =>
            document.body.classList.remove(blurClass)
        );
    }

    render() {
        const { class: classNames, style } = this.props;

        const classes = ['kumulos-background-mask'];

        if (!!classNames) {
            classes.push(classNames);
        }

        return (
            <div style={style} class={classes.join(' ')}>
                {this.props.children}
            </div>
        );
    }
}

interface UiProps {
    prompts: PromptConfig[];
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (
        prompt: PromptConfig,
        channelSelections?: ChannelListItem[]
    ) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
    onPostActionConfirm: (
        prompt: PromptConfig,
        channelSelections?: ChannelListItem[]
    ) => void;
    currentlyRequestingPrompt?: PromptConfig;
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

        return (
            <ChannelsDialog
                action={currentPostAction}
                onConfirm={channelSelections => {
                    this.props.onPostActionConfirm(
                        currentlyRequestingPrompt,
                        channelSelections
                    );
                }}
            />
        );
    }
}
