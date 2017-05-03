var path = require("path");
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var baseConfig = {
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
            allChunks: true,
            ignoreOrder: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                modules: true,
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                    ],
                })
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve('./web/'),
        ],
        alias: {
            core: path.resolve(__dirname, './core/'),
        },
        extensions: ['.js', '.jsx']
    }
};


var serverConfig = {
    context: __dirname,
    target: 'node',
    entry: './web/server.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
    },
    node: {
        console: true,
        global: true,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },
    externals: nodeExternals(),
    plugins: baseConfig.plugins,
    module: baseConfig.module,
    resolve: baseConfig.resolve,
};

var clientConfig = {
    context: __dirname,
    target: 'web',
    entry: './web/index',
    output: {
        path: path.resolve(__dirname, "dist", "assets"),
        publicPath: "/assets/",
        filename: "bundle.js",
    },
    plugins: baseConfig.plugins,
    module: baseConfig.module,
    resolve: baseConfig.resolve,
};

module.exports = [
    serverConfig,
    clientConfig,
];
