import { Component, h, JSX } from 'preact';

interface BackgroundMaskProps {
    class?: string;
    blurClass?: string;
    style?: JSX.CSSProperties;
}

interface BackgroundMaskState {
    blurClasses: string[];
}

export class BackgroundMask extends Component<
    BackgroundMaskProps,
    BackgroundMaskState
> {
    constructor(props: BackgroundMaskProps) {
        super(props);

        const blurClasses = this.props.blurClass?.split(' ') ?? [];
        blurClasses.push('kumulos-background-mask-blur');

        this.state = {
            blurClasses
        };
    }

    updateBlurState() {
        const { blurClasses } = this.state;

        blurClasses.forEach(blurClass => {
            if (!document.body.classList.contains(blurClass)) {
                document.body.classList.add(blurClass);
            }
        });
    }

    componentDidMount() {
        this.updateBlurState();
    }

    componentDidUpdate() {
        this.updateBlurState();
    }

    componentWillUnmount() {
        this.state.blurClasses.forEach(blurClass =>
            document.body.classList.remove(blurClass)
        );
    }

    render() {
        const { class: classNames, style } = this.props;

        const classes = ['kumulos-background-mask'];

        if (!!classNames) {
            classes.push(classNames);
        }

        return (
            <div style={style} class={classes.join(' ')}>
                {this.props.children}
            </div>
        );
    }
}
