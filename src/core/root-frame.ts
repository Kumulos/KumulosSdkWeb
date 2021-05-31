import '../styles.scss';

import { onDOMReady } from './utils';

export interface RootFrameContainer {
    name: string;
    element: HTMLDivElement;
}

export default class RootFrame {
    public readonly element: HTMLDivElement;
    public readonly containers: RootFrameContainer[];

    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'kumulos-ui-root';
        this.containers = [];

        onDOMReady(() => document.body.appendChild(this.element));
    }

    createContainer(name: string) {
        const container = {
            name,
            element: document.createElement('div')
        };

        container.element.id = `kumulos-ui-root-${name}`;
        this.element.appendChild(container.element);

        this.containers.push(container);

        return container;
    }
}
