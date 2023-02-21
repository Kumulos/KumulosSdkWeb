import { Context, SDKFeature } from './index';

type FeatureDependency =
    | string
    | object
    | IDBFactory
    | PromiseConstructor
    | Notification
    | PushManager
    | ServiceWorkerContainer
    | SafariRemoteNotification;

const CORE_FEATURE_DEPENDENCIES: FeatureDependency[] = [
    typeof Promise,
    typeof fetch,
    typeof indexedDB
];

const FEATURE_DEPENDENCY_CHECK: { [key in SDKFeature]: () => boolean } = {
    push: isBrowserSupportedForPush,
    ddl: isBrowserSupportedForDdl
};

// See: https://stackoverflow.com/a/2117523
export function uuidv4() {
    if (typeof crypto === 'undefined') {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
            c
        ) {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    return ((1e7).toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        c =>
            (
                Number(c) ^
                (crypto.getRandomValues(new Uint8Array(1))[0] &
                    (15 >> (Number(c) / 4)))
            ).toString(16)
    );
}

export function getBrowserName(): string {
    const ua = navigator.userAgent.toLowerCase();
    const browsers = ['edge', 'firefox', 'chrome', 'safari'];

    for (let b of browsers) {
        if (ua.indexOf(b) > -1) {
            return b;
        }
    }

    return '';
}

export function isBrowserSupported(sdkFeatures?: SDKFeature[]) {
    sdkFeatures = sdkFeatures ?? [];
    if (!sdkFeatures.length) {
        sdkFeatures.push(SDKFeature.PUSH);
    }

    return sdkFeatures.filter(f => FEATURE_DEPENDENCY_CHECK[f]()).length > 0;
}

function isBrowserSupportedForPush() {
    const coreDependencies = [...CORE_FEATURE_DEPENDENCIES];
    const browser = getBrowserName();

    if ('safari' === browser) {
        coreDependencies.push(typeof window.safari?.pushNotification);
    } else {
        coreDependencies.push(
            ...[
                typeof Notification,
                typeof navigator.serviceWorker,
                typeof PushManager
            ]
        );
    }

    return checkRequired(coreDependencies);
}

function isBrowserSupportedForDdl() {
    return checkRequired(CORE_FEATURE_DEPENDENCIES);
}

function checkRequired(coreDependencies: FeatureDependency[]) {
    return coreDependencies.reduce(
        (supported: boolean, dependency: FeatureDependency) =>
            supported && dependency !== 'undefined',
        true
    );
}

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
const imul =
    Math.imul ||
    function(a, b) {
        b |= 0; // ensure that opB is an integer. opA will automatically be coerced.
        // floating points give us 53 bits of precision to work with plus 1 sign bit
        // automatically handled for our convienence:
        // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
        //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
        var result = (a & 0x003fffff) * b;
        // 2. We can remove an integer coersion from the statement above because:
        //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
        //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
        if (a & 0xffc00000 /*!== 0*/) result += ((a & 0xffc00000) * b) | 0;
        return result | 0;
    };

// https://stackoverflow.com/a/52171480
export function cyrb53(str: string, seed = 0): number {
    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = imul(h1 ^ ch, 2654435761);
        h2 = imul(h2 ^ ch, 1597334677);
    }
    h1 =
        imul(h1 ^ (h1 >>> 16), 2246822507) ^ imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
        imul(h2 ^ (h2 >>> 16), 2246822507) ^ imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
export function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function authedFetch(
    ctx: Context,
    url: RequestInfo,
    options: RequestInit = { method: 'GET' }
): Promise<Response> {
    const existingHeaders = options.headers ?? {};

    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: ctx.authHeader,
        ...existingHeaders
    };

    return fetch(url, options);
}

export class AuthedFetchError extends Error {
    constructor(statusCode: number, statusText: string) {
        super(`authed fetch failed: ${statusCode}, ${statusText}`);
    }
}

export function authedFetchJson<T>(
    ctx: Context,
    url: RequestInfo,
    options?: RequestInit
): Promise<T> {
    return authedFetch(ctx, url, options).then(r => {
        if (!r.ok) {
            throw new AuthedFetchError(r.status, r.statusText);
        }

        return r.json();
    });
}

// Based on the alphabets in https://tools.ietf.org/html/rfc4648 Tables 1 & 2
export function base64UrlEncode(buffer: ArrayBuffer): string {
    const ints = new Uint8Array(buffer);
    const base64Encoded = btoa(
        ints.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    const urlVariant = base64Encoded
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');

    return urlVariant;
}

export async function registerServiceWorker(workerPath: string) {
    if (!('serviceWorker' in navigator)) {
        console.error(
            'ServiceWorker is not supported in this browser, aborting...'
        );
        return;
    }

    const updatedPath = new URL(workerPath, location.origin).href;
    try {
        await navigator.serviceWorker.register(updatedPath);
    } catch (e) {
        console.error(e);
    }
}

export function defer<T>() {
    const deferred = {
        resolve: (null as unknown) as (value?: T | PromiseLike<T>) => void,
        reject: (null as unknown) as (reason?: any) => void,
        promise: (null as unknown) as Promise<T>
    };

    deferred.promise = new Promise<T>((resolve, reject) => {
        (deferred as any).resolve = resolve;
        (deferred as any).reject = reject;
    });

    return deferred;
}

export function parseQueryString(
    qs: string = location.search,
    excludedQueryKeys: string[] = []
): { [key: string]: string } | undefined {
    let query = undefined;

    if (qs.length > 0) {
        query = qs
            .substring(1)
            .split('&')
            .map(vars => vars.split('='))
            .map(pairs => pairs.map(decodeURIComponent))
            .filter(pairs => excludedQueryKeys.indexOf(pairs[0]) === -1)
            .reduce((q, pair) => ({ ...q, [pair[0]]: pair[1] }), {});
    }

    return query;
}

export function onDOMReady(fn: () => void) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

export function isMobile(): boolean {
    return /android|iPhone|iPad|iPod|mobile/i.test(navigator.userAgent);
}
