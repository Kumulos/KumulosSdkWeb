import './bell.scss';
import './overlay.scss';

import { Component, Fragment, h } from 'preact';

import { PromptConfig } from '../core';
import { PromptManagerState } from '.';
import { PushSubscriptionState } from '../core/push';
import { createPortal } from 'preact/compat';
import { getBrowserName } from '../core/utils';

const DEFAULT_SUBSCRIBE_LABEL = 'Subscribe for notifications';

function inversePosition(pos: string): 'left' | 'right' {
    return pos.indexOf('left') > -1 ? 'right' : 'left';
}

function isMobile(): boolean {
    return /android|iPhone|iPad|iPod|mobile/i.test(navigator.userAgent);
}

interface PromptUiProps {
    config: PromptConfig;
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    requestNativePrompt: (prompt: PromptConfig) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
}

interface TooltipProps {
    position: 'left' | 'right';
}

class Tooltip extends Component<TooltipProps, never> {
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

class Bell extends Component<PromptUiProps, never> {
    onRequestNativePrompt = () => {
        this.props.requestNativePrompt(this.props.config);
    };

    render() {
        const classes = `kumulos-prompt kumulos-prompt-${this.props.promptManagerState} kumulos-bell-container kumulos-bell-container-${this.props.config.position}`;
        const tooltipPos = inversePosition(this.props.config.position);
        const bgColor = this.props.config.colors?.bell?.bg;
        const fgColor = this.props.config.colors?.bell?.fg;

        const bellStyle = {
            borderColor: fgColor,
            backgroundColor: bgColor
        };

        return (
            <div class={classes}>
                <div class="kumulos-bell-inner kumulos-tooltip-parent">
                    <div
                        class="kumulos-bell"
                        onClick={this.onRequestNativePrompt}
                        style={bellStyle as any}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                                fill={fgColor}
                            />
                        </svg>
                    </div>
                    <Tooltip position={tooltipPos}>
                        {this.props.config.labels?.tooltip?.subscribe ??
                            DEFAULT_SUBSCRIBE_LABEL}
                    </Tooltip>
                </div>
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

interface UiProps {
    prompts: PromptConfig[];
    subscriptionState: PushSubscriptionState;
    promptManagerState: PromptManagerState;
    requestNativePrompt: (prompt: PromptConfig) => void;
    onPromptDeclined: (prompt: PromptConfig) => void;
    currentlyRequestingPrompt?: PromptConfig;
}

export default class Ui extends Component<UiProps, never> {
    render() {
        return createPortal(
            <Fragment>
                {this.props.prompts.map(this.renderPrompt, this)}
                {!isMobile() && (
                    <Overlay
                        promptState={this.props.promptManagerState}
                        prompt={this.props.currentlyRequestingPrompt}
                        subscriptionState={this.props.subscriptionState}
                    />
                )}
            </Fragment>,
            document.body
        );
    }

    renderPrompt(prompt: PromptConfig) {
        switch (prompt.type) {
            case 'bell':
                return (
                    <Bell
                        config={prompt}
                        subscriptionState={this.props.subscriptionState}
                        promptManagerState={this.props.promptManagerState}
                        requestNativePrompt={this.props.requestNativePrompt}
                        onPromptDeclined={this.props.onPromptDeclined}
                    />
                );
            default:
                return null;
        }
    }
}
