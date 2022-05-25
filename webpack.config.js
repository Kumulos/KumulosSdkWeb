const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';
const isProd = environment === 'production';
const devtool = environment === 'development' ? 'inline-source-map' : false;

const moduleCfg = {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
};

const resolve = {
    extensions: ['.ts', '.tsx', '.js']
};

const optimization = {
    minimize: isProd,
    minimizer: [
        new TerserPlugin({
            parallel: true,
            extractComments: {
                banner: false
            },
            terserOptions: {
                compress: {
                    // IE10 issues
                    typeofs: false,
                    pure_funcs: ['console.log', 'console.info']
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
        target: ['webworker', 'es5'],
        mode: environment,
        entry: {
            worker: './src/worker/index.ts'
        },
        devtool,
        module: moduleCfg,
        resolve,
        optimization,
        output
    },
    {
        target: ['web', 'es5'],
        mode: environment,
        entry: {
            'optimove-web-bundle': './src/web/index.ts'
        },
        devtool,
        module: moduleCfg,
        resolve,
        optimization,
        output
    }
];
