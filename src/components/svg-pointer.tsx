import { Component, h } from 'preact';
import { Dimensions, Point } from '../core';

interface SvgPointerProps {
    area: Dimensions;
    start: Point;
    end: Point;
    color: string;
}

export function SvgPointer({ area, start, end, color }: SvgPointerProps) {
    const { x: sx, y: sy } = start;
    const { x: ex, y: ey } = end;
    const distX = ex - sx;
    const distY = ey - sy;
    const controlPointOffsetDist = Math.sqrt(distX * distX + distY * distY);
    const linePath = `M ${sx} ${sy} Q ${ex} ${sy +
        controlPointOffsetDist * 0.75} ${ex} ${ey + 10}`;
    const headPath = `M ${ex - 50} ${ey + 100} Q ${ex} ${ey - 100} ${ex +
        50} ${ey + 100}`;
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
