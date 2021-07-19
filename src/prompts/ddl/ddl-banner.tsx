import { Component, h, createRef, RefObject } from 'preact';
import { DdlBannerPromptConfig, PromptPosition } from '../../core';
import DeeplinkButton from './deeplink-button';
import { AppRating } from '../../components/app-rating';

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
    'kumulos-banner-compact'
];

export interface DdlBannerProps {
    config: DdlBannerPromptConfig;
    onConfirm: (config: DdlBannerPromptConfig) => void;
    onCancel: (config: DdlBannerPromptConfig) => void;
    dimensions: (width: number, height: number) => void;
}

export class DdlBanner extends Component<DdlBannerProps, never> {
    private containerRef: RefObject<HTMLDivElement>;

    constructor(props: DdlBannerProps) {
        super(props);

        this.containerRef = createRef<HTMLDivElement>();
    }

    componentDidMount() {
        if (!this.containerRef.current) {
            return;
        }

        const { clientWidth, clientHeight } = this.containerRef.current;

        this.props.dimensions(clientWidth, clientHeight);
    }

    onConfirm = () => {
        this.props.onConfirm(this.props.config);
    };

    onCancel = () => {
        this.props.onCancel(this.props.config);
    };

    getCssClasses(promptPosition: PromptPosition) {
        const classes = [...CLASSES, `kumulos-prompt-position-${promptPosition}`];

        if ([PromptPosition.TOP, PromptPosition.BOTTOM].includes(promptPosition)) {
            classes.push(`kumulos-safe-area-inset-pad-${promptPosition}`);
        }

        return classes.join(' ');
    }

    render() {
        const { config } = this.props;

        const {
            position,
            labels,
            colors,
            imageUrl,
            appRating
        } = config;
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
            </div>
        );
    }
}
