import { Component, h } from 'preact';
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

const PI_HALF = Math.PI / 2;
const POINTER_HEAD_FROM_BODY_DIST = 50;
const POINTER_CURVE_CTRL_POINT_DIST = 150;

function calcPointerHeadCurveCoordsFromCtrlAndTarget(
    ctrlPoint: Point,
    target: Point
): QuadraticCurvePoints {
    const pointerDirRads =
        Math.atan2(ctrlPoint.x - ctrlPoint.x, target.y - target.y) + PI_HALF;

    const dirVec: Point = {
        x: Math.cos(pointerDirRads),
        y: -Math.sin(pointerDirRads)
    };

    const curveCtrlPoint: Point = {
        x: dirVec.x * POINTER_CURVE_CTRL_POINT_DIST,
        y: dirVec.y * POINTER_CURVE_CTRL_POINT_DIST
    };

    const pointerOffset: Point = {
        x: -curveCtrlPoint.x * POINTER_HEAD_FROM_BODY_DIST,
        y: -dirVec.y * POINTER_HEAD_FROM_BODY_DIST
    };

    const curveStart: Point = {
        x:
            Math.cos(pointerDirRads - PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.x,
        y:
            -Math.sin(pointerDirRads - PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.y
    };

    const curveEnd: Point = {
        x:
            Math.cos(pointerDirRads + PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.x,
        y:
            -Math.sin(pointerDirRads + PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.y
    };

    return {
        p1: curveStart,
        p2: curveCtrlPoint,
        p3: curveEnd
    };
}

export function SvgPointer({ area, quadCurvePoints, color }: SvgPointerProps) {
    const { p1, p2, p3 } = quadCurvePoints;
    const linePath = `M ${p1.x} ${p1.y} Q ${p2.x} ${p2.y} ${p3.x} ${p3.y}`;

    const {
        p1: h1,
        p2: h2,
        p3: h3
    } = calcPointerHeadCurveCoordsFromCtrlAndTarget(p2, p3);
    const headPath = `M ${p3.x + h1.x} ${p3.y + h1.y} Q ${p3.x + h2.x} ${p3.y +
        h2.y} ${p3.x + h3.x} ${p3.y + h3.y}`;

    const strokeStyle = {
        stroke: color,
        fill: 'none'
    };

    return (
        <svg
            viewBox={`0 0 ${area.width} ${area.height}`}
            width={`${area.width}px`}
            height={`${area.height}px`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke-width="3"
                stroke-linecap="round"
                fill="none"
                fill-rule="evenodd"
            >
                <path style={strokeStyle} d={linePath} />
                <path style={strokeStyle} d={headPath} />
            </g>
        </svg>
    );
}
