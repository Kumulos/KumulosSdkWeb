import { EventType } from '../core';
import Kumulos from '../index';
import { getPageViewedProps } from './utils';
import { isBrowserSupported } from '../core/utils';

type CmdFn = (k:Kumulos) => void;
type Cmd = string | CmdFn;
type QueuedCommand = [Cmd, ...any[]];
type LazyKumulos = {q?: QueuedCommand[]};

interface Win extends Window {
    Kumulos?:LazyKumulos;
}

declare var window : Win;

function main() {
    if (!isBrowserSupported()) {
        console.warn('Kumulos: this browser does not support all required features, aborting initialization...');
        return;
    }

    if (location.protocol !== 'https:') {
        console.warn('Kumulos: this page is not served over HTTPS, some features may be unavailable...');
    }

    if (!window.Kumulos?.q) {
        return;
    }

    const q = window.Kumulos.q;
    const init = q.find(item => item[0] === 'init');

    if (init?.length !== 2) {
        return;
    }

    const instance = new Kumulos(init[1]);
    const executor = function (cmd:Cmd, ...args:any[]) {
        try {
            if (typeof cmd === 'function') {
                cmd(instance);
            } else {
                (instance as any)[cmd](...args);
            }
        } catch (e) {
            console.error(e);
        }
    };

    for (let i = 0; i < q.length; ++i) {
        const cmd = q[i][0];

        if (cmd === 'init') {
            continue;
        }

        executor(...q[i]);
    }

    instance.trackEvent(EventType.PAGE_VIEWED, getPageViewedProps());

    (window.Kumulos as any) = executor;
}

main();