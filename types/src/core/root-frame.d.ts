import '../styles.scss';
export interface RootFrameContainer {
    name: string;
    element: HTMLDivElement;
}
export default class RootFrame {
    readonly element: HTMLDivElement;
    readonly containers: RootFrameContainer[];
    constructor();
    createContainer(name: string): {
        name: string;
        element: HTMLDivElement;
    };
}
