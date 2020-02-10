import { PropsObject } from '../core';
import { parseQueryString } from '../core/utils';

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
    const query = parseQueryString(location.search, excludedQueryKeys);

    return {
        title: document.title,
        path: location.pathname,
        query
    };
}
