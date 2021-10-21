import { Component, h } from 'preact';

import { PushPromptConfig } from '../../core';
import { PromptManagerState } from '../index';
import { PushSubscriptionState } from '../../core/push';
import { getBrowserName } from '../../core/utils';
import { BackgroundMask } from './background-mask';

interface OverlayProps {
    promptState: PromptManagerState;
    prompt?: PushPromptConfig;
    subscriptionState: PushSubscriptionState;
}

export class Overlay extends Component<OverlayProps, never> {
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
