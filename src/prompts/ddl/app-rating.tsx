import { h } from 'preact';

export interface AppRatingProps {
    stars: number;
    ratingCount: number;
}

export function AppRating(props: AppRatingProps) {
    const { stars, ratingCount } = props;

    function createStars() {
        const starEls = [];
        for (let i = 1; i <= 5; i++) {
            starEls.push(
                <AppRatingStar
                    state={
                        stars >= i
                            ? 'on'
                            : stars < i && stars > i - 1
                            ? 'half'
                            : 'off'
                    }
                />
            );
        }

        return starEls;
    }

    return (
        <div class="kumulos-banner-rating">
            {createStars()}
            <span class="kumulos-banner-rating-count">
                ({props.ratingCount})
            </span>
        </div>
    );
}

interface AppRatingStarProps {
    state: 'on' | 'half' | 'off';
}

function AppRatingStar(props: AppRatingStarProps) {
    let starEl = <span>&#9734;</span>;

    if (props.state === 'on') {
        starEl = <span>&#9733;</span>;
    } else if (props.state === 'half') {
        starEl = (
            <div>
                <span>&#9734;</span>
                <span class="kumulos-half">&#9733;</span>
            </div>
        );
    } else {
        starEl = <span>&#9734;</span>;
    }

    return <div class="kumulos-banner-rating-star">{starEl}</div>;
}
