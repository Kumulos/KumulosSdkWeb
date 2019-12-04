import { PropsObject } from '../core';

interface PageViewProps extends PropsObject {
    title: string;
    path: string;
    query: PropsObject | undefined;
}

export function getPageViewedProps(
    excludedQueryKeys: string[] = [
        'password',
        'token',
        'email',
        'auth',
        'code',
        'client_secret'
    ]
): PageViewProps {
    let query = undefined;

    const qs = location.search;
    if (qs.length > 0) {
        query = qs
            .substring(1)
            .split('&')
            .map(vars => vars.split('='))
            .map(pairs => pairs.map(decodeURIComponent))
            .filter(pairs => excludedQueryKeys.indexOf(pairs[0]) === -1)
            .reduce((q, pair) => ({ ...q, [pair[0]]: pair[1] }), {});
    }

    return {
        title: document.title,
        path: location.pathname,
        query
    };
}
