import { h } from 'preact';
import './app-rating.scss';
export interface AppRatingProps {
    stars: number;
    ratingCount: number;
}
export declare function AppRating(props: AppRatingProps): h.JSX.Element;
