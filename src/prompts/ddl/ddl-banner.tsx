import { Component, RefObject, createRef, h } from 'preact';
import {
    DdlBannerPromptConfig,
    PromptPosition,
    UiActionType
} from '../../core';

import { AppRating } from '../../components/app-rating';
import DeeplinkButton from './deeplink-button';

const styles = {
    bannerIconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    closeIconStyle: {
        width: 12,
        height: 12
    }
};

const CLASSES = [
    'kumulos-prompt',
    'kumulos-banner-container',
    'kumulos-banner-compact',
    'kumulos-safe-area-inset-pad-left',
    'kumulos-safe-area-inset-pad-right'
];

const SHOW_COPY_TOAST_DELAY = 1000;

export interface DdlBannerProps {
    config: DdlBannerPromptConfig;
    onConfirm: (config: DdlBannerPromptConfig) => void;
    onCancel: (config: DdlBannerPromptConfig) => void;
    dimensions: (width: number, height: number) => void;
}

export class DdlBanner extends Component<
    DdlBannerProps,
    {
        showCopyToast: boolean;
    }
> {
    private containerRef: RefObject<HTMLDivElement>;

    constructor(props: DdlBannerProps) {
        super(props);

        this.containerRef = createRef<HTMLDivElement>();
        this.state = { showCopyToast: false };
    }

    componentDidMount() {
        if (!this.containerRef.current) {
            return;
        }

        const { clientWidth, clientHeight } = this.containerRef.current;

        this.props.dimensions(clientWidth, clientHeight);
    }

    private onConfirm = (actionType: UiActionType) => {
        if (this.state.showCopyToast === true) {
            return;
        }

        if (actionType === UiActionType.DDL_OPEN_DEEPLINK) {
            this.props.onConfirm(this.props.config);
            return;
        }

        if (actionType === UiActionType.DDL_OPEN_STORE) {
            this.setState({ showCopyToast: true });
            setTimeout(() => {
                this.setState({ showCopyToast: false });
                this.props.onConfirm(this.props.config);
            }, SHOW_COPY_TOAST_DELAY);
        }
    };

    private onCancel = () => {
        this.props.onCancel(this.props.config);
    };

    private getCssClasses(promptPosition: PromptPosition) {
        const classes = [
            ...CLASSES,
            `kumulos-prompt-position-${promptPosition}`
        ];

        if (
            [PromptPosition.TOP, PromptPosition.BOTTOM].includes(promptPosition)
        ) {
            classes.push(`kumulos-safe-area-inset-pad-${promptPosition}`);
        }

        return classes.join(' ');
    }

    render() {
        const { config } = this.props;

        const { position, labels, colors, imageUrl, appRating } = config;
        const { heading, body, acceptAction } = labels;
        const {
            bg,
            fg,
            acceptActionBg,
            acceptActionFg,
            declineActionBg,
            declineActionFg,
            ratingFg
        } = colors;

        const classes = this.getCssClasses(position);

        const containerStyle = {
            backgroundColor: bg,
            color: fg
        };

        const declineActionStyle: h.JSX.CSSProperties = {
            backgroundColor: declineActionBg,
            color: declineActionFg
        };

        const actionStyle: h.JSX.CSSProperties = {
            backgroundColor: acceptActionBg,
            color: acceptActionFg
        };

        const bannerIconStyle = {
            ...styles.bannerIconStyle,
            backgroundImage: `url(${imageUrl})`
        };

        return (
            <div style={containerStyle} class={classes} ref={this.containerRef}>
                <div
                    class="kumulos-banner-close"
                    style={declineActionStyle}
                    onTouchEnd={this.onCancel}
                >
                    &#10006;
                </div>
                <div style={bannerIconStyle} class="kumulos-banner-icon"></div>

                <div class="kumulos-banner-content">
                    <div class="kumulos-banner-header">
                        <h1>{heading}</h1>
                    </div>
                    <div class="kumulos-banner-body">{body}</div>
                    {appRating && (
                        <AppRating
                            ratingCount={appRating.ratingCount}
                            stars={appRating.rating}
                            color={ratingFg}
                        />
                    )}
                </div>

                <div class="kumulos-banner-actions">
                    <DeeplinkButton
                        style={actionStyle}
                        class="kumulos-action-button kumulos-action-button-confirm"
                        text={acceptAction}
                        promptActions={config}
                        onAction={this.onConfirm}
                    />
                </div>

                {this.state.showCopyToast && (
                    <div class="kumulos-toast">Link Copied</div>
                )}
            </div>
        );
    }
}
