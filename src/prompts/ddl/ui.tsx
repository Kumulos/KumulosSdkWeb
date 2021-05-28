import { Component, h } from 'preact';

import { DdlPromptConfig } from '../../core';
import { DdlBanner } from './ddl-banner';
import { createPortal } from 'preact/compat';
import { PromptPosition } from '../../core';

interface UiProps {
    config: DdlPromptConfig;
    onBannerConfirm: (config: DdlPromptConfig) => void;
    onBannerCancelled: (config: DdlPromptConfig) => void;
}

export default class Ui extends Component<UiProps, never> {
    private siteMargin?: number;
    private siteTransition?: string;

    onDimensions = (_bannerWidth: number, bannerHeight: number) => {
        const { config } = this.props;
        const bodyStyle = window.getComputedStyle(document.body, null);
        this.siteMargin = parseFloat(
            bodyStyle.getPropertyValue(
                config?.position === PromptPosition.TOP
                    ? 'margin-top'
                    : 'margin-bottom'
            )
        );
        this.siteTransition = bodyStyle.getPropertyValue('transition');

        if (config?.position === PromptPosition.BOTTOM) {
            bannerHeight += 20;
        }

        const offset = bannerHeight + this.siteMargin;

        document.body.style.transition = 'all 0.375s ease 0s';
        document.body.style[
            config?.position === PromptPosition.TOP
                ? 'marginTop'
                : 'marginBottom'
        ] = `${offset}px`;
    };

    onBannerConfirm = (config: DdlPromptConfig) => {
        this.resetBodyStyles();
        this.props.onBannerConfirm(config);
    };

    onBannerCancelled = (config: DdlPromptConfig) => {
        this.resetBodyStyles();
        this.props.onBannerCancelled(config);
    };

    resetBodyStyles() {
        const { config } = this.props;
        document.body.style.transition = this.siteTransition ?? '';

        document.body.style[
            config?.position === PromptPosition.TOP
                ? 'marginTop'
                : 'marginBottom'
        ] = this.siteMargin ? `${this.siteMargin}px` : '';
    }

    render() {
        if (!this.props.config) {
            return null;
        }

        return createPortal(
            <DdlBanner
                config={this.props.config}
                onConfirm={this.onBannerConfirm}
                onCancel={this.onBannerCancelled}
                dimensions={this.onDimensions}
            />,
            document.body
        );
    }
}
