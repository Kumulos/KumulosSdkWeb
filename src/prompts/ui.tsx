import './overlay.scss';
import './underlay.scss';
import './prompts.scss';

import { Component, Fragment, h } from 'preact';

import { PromptConfig } from '../core';
import { PromptManagerState } from '.';
import { PushSubscriptionState } from '../core/push';
import { createPortal } from 'preact/compat';
import { getBrowserName } from '../core/utils';
import { Bell } from './bell';
import { Alert } from './alert';

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
    onPromptAccepted: (prompt: PromptConfig) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
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
    updateBlurState() {
        const blurClass = 'kumulos-overlay-blur';

        if (
            this.props.subscriptionState !== 'unsubscribed' &&
            !document.body.classList.contains(blurClass)
        ) {
            return;
        }

        if (
            this.props.promptState === 'requesting' &&
            this.props.prompt?.overlay
        ) {
            document.body.classList.add(blurClass);
        } else {
            document.body.classList.remove(blurClass);
        }
    }

    componentDidMount() {
        this.updateBlurState();
    }

    componentDidUpdate() {
        this.updateBlurState();
    }

    componentWillUnmount() {
        document.body.classList.remove('kumulos-overlay-blur');
    }

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
            <div
                class={`kumulos-overlay kumulos-overlay-${getBrowserName()}`}
                style={style}
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
            </div>
        );
    }
}

class Toast extends Component<{ message: string }, never> {
    render() {
        return <div class="kumulos-toast">{this.props.message}</div>;
    }
}

interface UnderlayProps {
    prompt?: PromptConfig;
}

class Underlay extends Component<UnderlayProps, never> {
    blurClass = 'kumulos-underlay-blur';

    updateBlurState() {
        if (this.props.prompt?.overlay) {
            document.body.classList.add(this.blurClass);
        } else {
            document.body.classList.remove(this.blurClass);
        }
    }

    componentDidMount() {
        this.updateBlurState();
    }

    componentDidUpdate() {
        this.updateBlurState();
    }

    componentWillUnmount() {
        document.body.classList.remove(this.blurClass);
    }

    render() {
        const underlay = this.props.prompt?.underlay;

        if (undefined === underlay) {
            return null;
        }

        const underlayStyle = {
            backgroundColor: underlay.colors.bg
        };

        return (
            <div
                style={underlayStyle}
                className="kumulos-prompt-underlay"
            ></div>
        );
    }
}

interface UiProps {
    prompts: PromptConfig[];
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    onPromptAccepted: (prompt: PromptConfig) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
    currentlyRequestingPrompt?: PromptConfig;
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
                {this.renderUnderlay()}

                {this.props.prompts.map(this.renderPrompt, this)}
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

    renderUnderlay() {
        const { prompts } = this.props;
        const lastPrompt = prompts?.[prompts.length - 1];

        return <Underlay prompt={lastPrompt} />;
    }

    renderPrompt(prompt: PromptConfig) {
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
                return (
                    <Alert
                        config={prompt}
                        subscriptionState={this.props.subscriptionState}
                        promptManagerState={this.props.promptManagerState}
                        onPromptAccepted={this.props.onPromptAccepted}
                        onPromptDeclined={this.props.onPromptDeclined}
                    />
                );
            default:
                return null;
        }
    }
}
