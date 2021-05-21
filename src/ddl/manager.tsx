import Kumulos from '../index';
import { Context } from '../core/index';
import RootFrame from '../core/root-frame';

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
