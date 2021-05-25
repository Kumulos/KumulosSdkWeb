import { Component, h, createRef, RefObject } from 'preact';
import { PromptConfig, SDKFeature } from '../core';
import DeeplinkButton from './deeplink-button';
import { UIContext, UIContextState } from './ui-context';

const styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};

export interface DDLBannerProps {
    config: PromptConfig;
    onConfirm: (config: PromptConfig) => void;
    onCancel: (config: PromptConfig) => void;
    dimensions: (width: number, height: number) => void;
}

export class DDLBanner extends Component<DDLBannerProps, never> {
    private containerRef: RefObject<HTMLDivElement>;

    constructor(props: DDLBannerProps) {
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

    renderBanner = (uiContext?: UIContextState) => {
        const { config } = this.props;

        if (config.feature !== SDKFeature.DDL) {
            return null;
        }

        const { canonicalLinkUrl, position, labels, colors } = config;
        const { heading, body, acceptAction } = labels.banner;
        const { bg, fg, acceptActionBg, acceptActionFg } = colors.banner;

        const classes = `kumulos-prompt kumulos-ddlbanner-container kumulos-prompt-position-${position}`;

        const containerStyle = {
            backgroundColor: bg,
            color: fg
        };

        const actionStyle: h.JSX.CSSProperties = {
            backgroundColor: acceptActionBg,
            color: acceptActionFg
        };

        const iconStyle = {
            ...styles.iconStyle,
            backgroundImage: `url(${uiContext?.platformConfig.iconUrl})`
        };

        return (
            <div style={containerStyle} class={classes} ref={this.containerRef}>
                <div class="kumulos-ddlbanner-close" onTouchEnd={this.onCancel}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 121.31 122.876"
                        style={{ width: 12, height: 12 }}
                    >
                        <g>
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
                            />
                        </g>
                    </svg>
                </div>
                <div style={iconStyle} class="kumulos-ddlbanner-icon"></div>

                <div class="kumulos-ddlbanner-content">
                    <div class="kumulos-ddlbanner-header">
                        <h1>{heading}</h1>
                    </div>
                    <div class="kumulos-ddlbanner-body">{body}</div>
                    <div class="kumulos-ddlbanner-rating">*****</div>
                </div>

                <div class="kumulos-ddlbanner-actions">
                    <DeeplinkButton
                        style={actionStyle}
                        class="kumulos-action-button kumulos-action-button-confirm"
                        text={acceptAction}
                        linkUrl={canonicalLinkUrl}
                        onAction={this.onConfirm}
                    />
                </div>
            </div>
        );
    };

    render() {
        return <UIContext.Consumer>{this.renderBanner}</UIContext.Consumer>;
    }
}
