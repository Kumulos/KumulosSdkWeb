import {
    KumulosEvent,
    PromptConfig,
    PromptPosition,
    PromptTypeName
} from '../core';

import { triggerMatched } from './triggers';

const cases: [string, string, boolean][] = [
    ['/', '/', true],
    ['/', '/foo-bar', false],
    ['/*', '/foo-bar', true],
    ['/foo-bar', '/foo-bar', true],
    ['/foo-bar', '/foo-bar/baz', false],
    ['/foo-bar/*', '/foo-bar/baz', true],
    ['/en/*/blog', '/en/2020/blog', true],
    ['/en/*/blog', '/en/2020/sub', false],
    ['*/archive', '/2020/archive', true]
];

test.each(cases)(
    'propIn filter: %s path: %s matches: %p',
    (filter, path, expected) => {
        expect(
            triggerMatched(newPageViewPrompt(filter), newPageViewEvent(path))
        ).toBe(expected);
    }
);

function newPageViewPrompt(pathFilter: string): PromptConfig {
    return {
        position: PromptPosition.BOTTOM_LEFT,
        type: PromptTypeName.BELL,
        uuid: 'prompt-1',
        trigger: {
            event: 'pageViewed',
            filters: [['path', 'IN', [pathFilter]]]
        }
    };
}

function newPageViewEvent(path: string): KumulosEvent {
    return {
        type: 'pageViewed',
        timestamp: Date.now(),
        userId: 'user-1',
        uuid: `event-${Date.now()}`,
        data: {
            path
        }
    };
}
