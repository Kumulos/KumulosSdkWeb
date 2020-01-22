import './bell.scss';
import './overlay.scss';

import { Component, Fragment, h } from 'preact';

import { PromptConfig } from '../core';
import { PromptManagerState } from '.';
import { PushSubscriptionState } from '../core/push';
import { createPortal } from 'preact/compat';

const DEFAULT_SUBSCRIBE_LABEL = 'Subscribe for notifications';

function inversePosition(pos: string): 'left' | 'right' {
    return pos.indexOf('left') > -1 ? 'right' : 'left';
}

function getBrowserName(): string {
    const ua = navigator.userAgent.toLowerCase();
    const browsers = ['edge', 'firefox', 'chrome', 'safari'];

    for (let b of browsers) {
        if (ua.indexOf(b) > -1) {
            return b;
        }
    }

    return '';
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
        if (this.props.subscriptionState !== 'unsubscribed') {
            return null;
        }

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
}

class Overlay extends Component<OverlayProps, never> {
    updateBlurState() {
        const blurClass = 'kumulos-overlay-blur';

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
        const { promptState, prompt } = this.props;

        if (!prompt || promptState !== 'requesting' || !prompt.overlay) {
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
                            width="60"
                            height="30"
                            viewBox="0 0 22.931481 10.702209"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g transform="translate(-84.797 -137.57)">
                                <path
                                    d="m107.27 137.57c-0.85825 0.21893-1.1426 1.4022-2.0164 1.7627-2.3976 1.4485-5.1526 2.1624-7.8548 2.8068-2.9661 0.63867-5.9654 1.119-8.9661 1.5615-0.41514 0.0524-1.0682 0.21112-0.46798-0.28108 0.44267-0.72215 1.6468-1.5374 1.1985-2.458-1.0644-0.61662-1.1387 1.2071-1.7981 1.6772-0.5417 0.81574-1.3889 1.3066-2.2058 1.7979-0.95589 0.60047 0.20922 1.4985 0.91298 1.6112 2.5142 0.95092 5.1189 1.6734 7.7581 2.1778 1.2049 0.35323 0.92812-1.449-0.19376-1.1189-2.4877-0.51019-4.949-1.1923-7.3121-2.1277 3.2517-0.30481 6.4694-0.89638 9.6816-1.4723 3.2949-0.67721 6.6438-1.4624 9.5969-3.1297 0.85452-0.5218 1.6368-1.2265 2.1001-2.1235 0.10591-0.30575-0.12194-0.63786-0.43344-0.68399z"
                                    stroke-width=".82632"
                                    style={{ fill: overlay.colors.text }}
                                />
                            </g>
                        </svg>
                        {overlay.iconUrl && <img src={overlay.iconUrl} />}
                        <div class="kumulos-overlay-content">
                            <h3>{overlay.labels.heading}</h3>
                            <p>{overlay.labels.body}</p>
                            {overlay.links.map(l => (
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
