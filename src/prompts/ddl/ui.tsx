import { Component, h, Fragment } from 'preact';

import { DdlPromptConfig, UiActionType, Context } from '../../core';
import { DdlBanner } from './ddl-banner';
import { createPortal } from 'preact/compat';
import { PromptPosition } from '../../core';
import FpCapture from '../../fp/fp-capture';
import { FingerprintComponents } from '../../fp/types';

interface UiProps {
    config: DdlPromptConfig;
    context: Context;
    onBannerConfirm: (
        config: DdlPromptConfig,
        fingerprintComponents?: FingerprintComponents
    ) => void;
    onBannerCancelled: (config: DdlPromptConfig) => void;
}

interface UiState {
    requestFpCapture: boolean;
}

export default class Ui extends Component<UiProps, UiState> {
    private siteMargin?: number;
    private siteTransition?: string;

    constructor(props: UiProps) {
        super(props);

        this.state = {
            requestFpCapture: false
        };
    }

    private onDimensions = (_bannerWidth: number, bannerHeight: number) => {
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

    private onBannerConfirm = (config: DdlPromptConfig) => {
        if (config.uiActions.accept.type === UiActionType.DDL_OPEN_STORE) {
            this.setState({ requestFpCapture: true });
        } else {
            this.resetBodyStyles();
            this.props.onBannerConfirm(this.props.config);
        }
    };

    private onBannerCancelled = (config: DdlPromptConfig) => {
        this.resetBodyStyles();
        this.props.onBannerCancelled(config);
    };

    private onCaptureFp = (components: FingerprintComponents) => {
        this.resetBodyStyles();
        this.props.onBannerConfirm(this.props.config, components);
    };

    private resetBodyStyles() {
        const { config } = this.props;
        document.body.style.transition = this.siteTransition ?? '';

        document.body.style[
            config?.position === PromptPosition.TOP
                ? 'marginTop'
                : 'marginBottom'
        ] = this.siteMargin ? `${this.siteMargin}px` : '';
    }

    componentWillUnmount() {
        this.resetBodyStyles();
    }

    render() {
        if (!this.props.config) {
            return null;
        }

        return createPortal(
            <Fragment>
                <DdlBanner
                    config={this.props.config}
                    onConfirm={this.onBannerConfirm}
                    onCancel={this.onBannerCancelled}
                    dimensions={this.onDimensions}
                />
                <FpCapture
                    requestCapture={this.state.requestFpCapture}
                    onCaptured={this.onCaptureFp}
                />
            </Fragment>,
            document.body
        );
    }
}
