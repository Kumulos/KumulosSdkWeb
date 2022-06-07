import Kumulos from '../index';
import { isBrowserSupported } from '../core/utils';

type CmdFn = (k: Kumulos) => void;
type Cmd = string | CmdFn;
type QueuedCommand = [Cmd, ...any[]];
type LazyKumulos = { q?: QueuedCommand[] };

interface Win extends Window {
    Kumulos?: LazyKumulos;
}

declare var window: Win;

async function main() {
    if (!window.Kumulos?.q) {
        return;
    }

    const q = window.Kumulos.q;
    const init = q.find(item => item[0] === 'init');

    if (init?.length !== 2) {
        return;
    }

    if (!isBrowserSupported(init[1].features)) {
        console.warn(
            'Optimobile: this browser does not support all required features, aborting initialization...'
        );
        return;
    }

    if (location.protocol !== 'https:') {
        console.warn(
            'Optimobile: this page is not served over HTTPS, some features may be unavailable...'
        );
    }

    const instance = await Kumulos.buildInstance(init[1]);
    const executor = function(cmd: Cmd, ...args: any[]) {
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

    (window.Kumulos as any) = executor;
}

main();
