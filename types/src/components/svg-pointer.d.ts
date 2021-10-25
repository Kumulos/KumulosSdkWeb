import { h } from 'preact';
import { Dimensions, Point } from '../core';
interface QuadraticCurvePoints {
    p1: Point;
    p2: Point;
    p3: Point;
}
interface SvgPointerProps {
    area: Dimensions;
    quadCurvePoints: QuadraticCurvePoints;
    color: string;
}
export declare function SvgPointer({ area, quadCurvePoints, color }: SvgPointerProps): h.JSX.Element;
export {};
