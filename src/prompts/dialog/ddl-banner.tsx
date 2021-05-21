import { Component, h } from 'preact';
import { DDLConfig } from '../../ddl/config';

const styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};

export interface DDLBannerProps {
    config: DDLConfig;
}

export class DDLBanner extends Component<DDLBannerProps, never> {
    onTap = () => {};

    render() {
        const { config } = this.props;

        const classes = `kumulos-prompt kumulos-ddlbanner-container kumulos-prompt-position-${config.position}`;

        const { heading, body, action } = config.labels;
        const { bg, fg, actionBg, actionFg } = config.colors;

        const containerStyle = {
            backgroundColor: bg,
            color: fg
        };

        const actionStyle = {
            backgroundColor: actionBg,
            color: actionFg
        };

        const iconStyle = {
            ...styles.iconStyle,
            backgroundImage: `url(${config.imageUrl})`
        };

        return (
            <div style={containerStyle} class={classes}>
                <div style={iconStyle} class="kumulos-ddlbanner-close"></div>
                <div style={iconStyle} class="kumulos-ddlbanner-icon"></div>

                <div class="kumulos-ddlbanner-content">
                    <div class="kumulos-ddlbanner-header">
                        <h1>{heading}</h1>
                    </div>
                    <div class="kumulos-ddlbanner-body">{body}</div>
                    <div class="kumulos-ddlbanner-rating">rating here</div>
                </div>

                <div class="kumulos-ddlbanner-actions">
                    <button
                        type="button"
                        style={actionStyle}
                        class="kumulos-action-button kumulos-action-button-confirm"
                        onClick={this.onTap}
                    >
                        {action}
                    </button>
                </div>
            </div>
        );
    }
}
