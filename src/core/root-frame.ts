export default class RootFrame {
    public readonly element: HTMLDivElement;

    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'kumulos-ui-root';

        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(this.element);
        });
    }
}
