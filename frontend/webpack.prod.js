var path = require("path");
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    context: __dirname,

    entry: {
        'app': [
            './src/index',
        ]
    },

    output: {
        path: path.resolve(__dirname, "dist", "assets"),
        filename: "bundle.js",
        publicPath: "/assets/",
    },
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
                        loader: 'react-hot-loader',
                    },
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