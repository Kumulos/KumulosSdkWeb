import { Context, SDKFeature } from './index';
export declare function uuidv4(): string;
export declare function getBrowserName(): string;
export declare function isBrowserSupported(sdkFeatures?: SDKFeature[]): boolean;
export declare function cyrb53(str: string, seed?: number): number;
export declare function escapeRegExp(str: string): string;
export declare function authedFetch(ctx: Context, url: RequestInfo, options?: RequestInit): Promise<Response>;
export declare class AuthedFetchError extends Error {
    constructor(statusCode: number, statusText: string);
}
export declare function authedFetchJson<T>(ctx: Context, url: RequestInfo, options?: RequestInit): Promise<T>;
export declare function base64UrlEncode(buffer: ArrayBuffer): string;
export declare function registerServiceWorker(workerPath: string): Promise<void>;
export declare function defer<T>(): {
    resolve: (value?: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    promise: Promise<T>;
};
export declare function parseQueryString(qs?: string, excludedQueryKeys?: string[]): {
    [key: string]: string;
} | undefined;
export declare function onDOMReady(fn: () => void): void;
export declare function isMobile(): boolean;
