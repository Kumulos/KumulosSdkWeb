import { h } from 'preact';
import { Dimensions, Point } from '../core';
interface SvgPointerProps {
    area: Dimensions;
    start: Point;
    end: Point;
    color: string;
}
export declare function SvgPointer({ area, start, end, color }: SvgPointerProps): h.JSX.Element;
export {};
