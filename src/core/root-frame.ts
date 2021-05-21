import { onDOMReady } from './utils';

export default class RootFrame {
    public readonly element: HTMLDivElement;

    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'kumulos-ui-root';

        onDOMReady(() => document.body.appendChild(this.element));
    }
}
