import { Context } from ".";
export declare function uuidv4(): string;
export declare function isBrowserSupported(): boolean;
export declare function cyrb53(str: string, seed?: number): number;
export declare function escapeRegExp(str: string): string;
export declare function authedFetch(ctx: Context, url: RequestInfo, options?: RequestInit): Promise<Response>;
export declare function authedFetchJson<T>(ctx: Context, url: RequestInfo, options?: RequestInit): Promise<T>;
