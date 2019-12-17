import { h } from 'preact';

export default function Ui(props: { msg: string }) {
    return <h1>Hello {props.msg}</h1>;
}
