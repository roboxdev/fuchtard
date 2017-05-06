const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    context: __dirname,

    entry: './web/index',
    devtool: 'eval',
    devServer: {
        contentBase: './web/public',
        publicPath: '/',
        hot: true,
        compress: true,
        port: 3000,
        historyApiFallback: {
            rewrites: [
                { from: 'bundle.js', to: '/bundle.js' },
            ],
        },
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new HtmlWebpackPlugin({
            template: 'web/index.ejs',
            inject: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'react-hot-loader',
                    },
                    {

                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            modules: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        // has separate config, see postcss.config.js nearby
                    },
                ],
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: 'ejs-loader',
                        options: {
                            variable: 'data',
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        modules: [
            'node_modules',
            path.resolve('./web/'),
        ],
        alias: {
            core: path.resolve(__dirname, './core/'),
        },
        extensions: ['.js', '.jsx'],
    },
};
