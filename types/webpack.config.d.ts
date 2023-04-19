declare const _exports: ({
    mode: string;
    entry: {
        index: string;
    };
    devtool: string | boolean;
    module: {
        rules: ({
            test: RegExp;
            use: string;
            exclude: RegExp;
        } | {
            test: RegExp;
            use: string[];
            exclude?: undefined;
        })[];
    };
    resolve: {
        extensions: string[];
    };
    optimization: {
        minimize: boolean;
        minimizer: TerserPlugin<import("terser").MinifyOptions>[];
    };
    output: {
        library: string;
        libraryTarget: string;
        filename: string;
        path: string;
    };
} | {
    target: string[];
    mode: string;
    entry: {
        'optimove-worker': string;
    };
    devtool: string | boolean;
    module: {
        rules: ({
            test: RegExp;
            use: string;
            exclude: RegExp;
        } | {
            test: RegExp;
            use: string[];
            exclude?: undefined;
        })[];
    };
    resolve: {
        extensions: string[];
    };
    optimization: {
        minimize: boolean;
        minimizer: TerserPlugin<import("terser").MinifyOptions>[];
    };
    output: {
        filename: string;
        path: string;
    };
} | {
    target: string[];
    mode: string;
    entry: {
        'optimove-web-bundle': string;
    };
    devtool: string | boolean;
    module: {
        rules: ({
            test: RegExp;
            use: string;
            exclude: RegExp;
        } | {
            test: RegExp;
            use: string[];
            exclude?: undefined;
        })[];
    };
    resolve: {
        extensions: string[];
    };
    optimization: {
        minimize: boolean;
        minimizer: TerserPlugin<import("terser").MinifyOptions>[];
    };
    output: {
        filename: string;
        path: string;
    };
})[];
export = _exports;
import TerserPlugin = require("terser-webpack-plugin");
