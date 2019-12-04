import { PropsObject } from '../core';
interface PageViewProps extends PropsObject {
    title: string;
    path: string;
    query: PropsObject | undefined;
}
export declare function getPageViewedProps(excludedQueryKeys?: string[]): PageViewProps;
export {};
