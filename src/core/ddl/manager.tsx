import Kumulos from '../../index';
import { Context } from '../index';
import RootFrame from '../root-frame';

export default class DDLManager {
    private readonly kumulosClient: Kumulos;
    private readonly context: Context;
    private readonly rootFrame: RootFrame;

    constructor(client: Kumulos, ctx: Context, rootFrame: RootFrame) {
        this.rootFrame = rootFrame;
        this.kumulosClient = client;
        this.context = ctx;
    }
}
