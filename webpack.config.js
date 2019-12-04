const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';
const isProd = environment === 'production';
const devtool = environment === 'development' ? 'inline-source-map' : false;

const moduleCfg = {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
};

const resolve = {
    extensions: ['.ts', '.js']
};

const optimization = {
    minimize: isProd,
    minimizer: [
        new UglifyJsPlugin({
            parallel: true,
            uglifyOptions: {
                compress: {
                    // IE10 issues
                    typeofs: false
                }
            }
        })
    ]
};

const output = {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
};

module.exports = [
    {
        mode: environment,
        entry: {
            index: './src/index.ts'
        },
        devtool,
        module: moduleCfg,
        resolve,
        optimization,
        output: { ...output, library: 'kumulos', libraryTarget: 'umd' }
    },
    {
        mode: environment,
        entry: {
            worker: './src/worker.ts'
        },
        devtool,
        module: moduleCfg,
        resolve,
        optimization,
        output
    },
    {
        mode: environment,
        entry: {
            'web-bundle': './src/web/index.ts'
        },
        devtool,
        module: moduleCfg,
        resolve,
        optimization,
        output
    }
];
