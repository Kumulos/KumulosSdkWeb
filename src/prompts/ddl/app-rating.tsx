import { h } from 'preact';

export interface AppRatingProps {
    stars: number;
    ratingCount: number;
}

export function AppRating(props: AppRatingProps) {
    const { stars, ratingCount } = props;

    return <div></div>;
}
