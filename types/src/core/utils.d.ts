import { SDKFeature } from './index';
export declare function uuidv4(): string;
export declare function getBrowserName(): string;
export declare function isBrowserSupported(sdkFeatures?: SDKFeature[]): boolean;
export declare function cyrb53(str: string, seed?: number): number;
export declare function escapeRegExp(str: string): string;
export declare function performFetch(url: RequestInfo, authHeader?: string, options?: RequestInit): Promise<Response>;
export declare class FetchError extends Error {
    constructor(statusCode: number, statusText: string);
}
export declare function performJsonFetch<T>(url: RequestInfo, authHeader?: string, options?: RequestInit): Promise<T>;
export declare function base64UrlEncode(buffer: ArrayBuffer): string;
export declare function getFullUrl(path: string): string;
export declare function defer<T>(): {
    resolve: (value?: T | PromiseLike<T> | undefined) => void;
    reject: (reason?: any) => void;
    promise: Promise<T>;
};
export declare function parseQueryString(qs?: string, excludedQueryKeys?: string[]): {
    [key: string]: string;
} | undefined;
export declare function onDOMReady(fn: () => void): void;
export declare function isMobile(): boolean;
