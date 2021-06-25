import { h } from 'preact';
import './app-rating.scss';
export interface AppRatingProps {
    stars: number;
    ratingCount: number;
    color: string;
}
export declare function AppRating(props: AppRatingProps): h.JSX.Element;
