import { Component, h, createRef, RefObject } from 'preact';
import { DDLConfig } from './config';
import DeeplinkButton from './deeplink-button';

const styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};

export interface DDLBannerProps {
    config: DDLConfig;
    onConfirm: (config: DDLConfig) => void;
    onCancel: (config: DDLConfig) => void;
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

    render() {
        const { config } = this.props;

        const classes = `kumulos-prompt kumulos-ddlbanner-container kumulos-prompt-position-${config.position}`;

        const { heading, body, action } = config.labels;
        const { bg, fg, actionBg, actionFg } = config.colors;

        const containerStyle = {
            backgroundColor: bg,
            color: fg
        };

        const actionStyle: h.JSX.CSSProperties = {
            backgroundColor: actionBg,
            color: actionFg
        };

        const iconStyle = {
            ...styles.iconStyle,
            backgroundImage: `url(${config.imageUrl})`
        };

        return (
            <div style={containerStyle} class={classes} ref={this.containerRef}>
                <div
                    style={iconStyle}
                    class="kumulos-ddlbanner-close"
                    onClick={() => this.props.onCancel(config)}
                >
                    x
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
                        text={action}
                        linkUrl={config.canonicalLinkUrl}
                        onClick={this.onConfirm}
                    />
                </div>
            </div>
        );
    }
}
