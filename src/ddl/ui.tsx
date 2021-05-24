import { Component, h } from 'preact';

import { DDLConfig } from './config';
import { DDLBanner } from './ddl-banner';
import { createPortal } from 'preact/compat';

interface UiProps {
    config: DDLConfig;
    onBannerConfirm: (config: DDLConfig) => void;
    onBannerCancelled: (config: DDLConfig) => void;
}

export default class Ui extends Component<UiProps, never> {
    private siteMarginTop?: number;
    private siteTransition?: string;

    onDimensions = (_bannerWidth: number, bannerHeight: number) => {
        const bodyStyle = window.getComputedStyle(document.body, null);
        this.siteMarginTop = parseFloat(
            bodyStyle.getPropertyValue('margin-top')
        );
        this.siteTransition = bodyStyle.getPropertyValue('transition');

        const offset = bannerHeight + this.siteMarginTop;

        document.body.style.transition = 'all 0.375s ease 0s';
        document.body.style.marginTop = `${offset}px`;
    };

    onBannerConfirm = (config: DDLConfig) => {
        this.resetBodyStyles();
        this.props.onBannerConfirm(config);
    };

    onBannerCancelled = (config: DDLConfig) => {
        this.resetBodyStyles();
        this.props.onBannerCancelled(config);
    };

    resetBodyStyles() {
        if (this.siteTransition) {
            document.body.style.transition = this.siteTransition;
        }

        if (this.siteMarginTop) {
            document.body.style.marginTop = `${this.siteMarginTop}px`;
        }
    }

    render() {
        return createPortal(
            <DDLBanner
                config={this.props.config}
                onConfirm={this.onBannerConfirm}
                onCancel={this.onBannerCancelled}
                dimensions={this.onDimensions}
            />,
            document.body
        );
    }
}
