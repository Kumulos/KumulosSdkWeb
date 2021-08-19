import { Component, h } from 'preact';
import { InAppMessagePartForPreview } from './structs';
interface InAppDisplayProps {
    width: string;
    height: string;
    messagePart: InAppMessagePartForPreview;
    onMessageAction: (action: any) => void;
}
interface InAppDisplayState {
    ready: boolean;
}
export default class InAppDisplayProxy extends Component<InAppDisplayProps, InAppDisplayState> {
    private frame;
    constructor(props: InAppDisplayProps);
    onMessage: (e: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: InAppDisplayProps, prevState: InAppDisplayState): void;
    requestRender(): void;
    render(): h.JSX.Element;
}
export {};
