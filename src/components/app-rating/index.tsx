import { h } from 'preact';

import './app-rating.scss';

export interface AppRatingProps {
    stars: number;
    ratingCount: number;
    color: string;
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

    const ratingStyle = {
        color: props.color
    };

    return (
        <div class="kumulos-rating" style={ratingStyle}>
            {createStars()}
            <span class="kumulos-rating-count">({props.ratingCount})</span>
        </div>
    );
}

interface AppRatingStarProps {
    state: 'on' | 'half' | 'off';
}

function AppRatingStar(props: AppRatingStarProps) {
    let starEl;

    if (props.state === 'on') {
        starEl = <span>&#9733;</span>;
    } else if (props.state === 'half') {
        starEl = (
            <div>
                <span>&#9734;</span>
                <span class="kumulos-rating-halfstar">&#9733;</span>
            </div>
        );
    } else {
        starEl = <span>&#9734;</span>;
    }

    return <div class="kumulos-rating-star">{starEl}</div>;
}
