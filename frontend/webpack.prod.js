var path = require("path");
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var CompressionPlugin = require("compression-webpack-plugin");
// var ExtractTextPlugin = require('extract-text-webpack-plugin');


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
                use: [
                    'style-loader',
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
                        loader: 'postcss-loader',
                        // has separate config, see postcss.config.js nearby
                    }
                ],
            },
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve('./src'),
        ],
        extensions: ['.js', '.jsx']
    }
};


var serverConfig = {
    context: __dirname,
    target: 'node',
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
    },
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },
    externals: nodeExternals(),
    module: baseConfig.module,
    resolve: baseConfig.resolve,
};

var clientConfig = {
    context: __dirname,
    target: 'web',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, "dist", "assets"),
        publicPath: "/assets/",
        filename: "bundle.js",
    },
    plugins: baseConfig.plugins,
    // plugins: baseConfig.plugins.concat([
    //     new ExtractTextPlugin({
    //         filename: 'index.css',
    //         allChunks: true,
    //     })
    // ]),
    module: baseConfig.module,
    resolve: baseConfig.resolve,
};

module.exports = [serverConfig, clientConfig];
