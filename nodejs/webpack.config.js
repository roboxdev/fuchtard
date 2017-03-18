var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});


module.exports = {
    context: __dirname,

    entry: {
        'app': [
            // 'webpack-dev-server/client?http://localhost:3000',
            // 'webpack/hot/only-dev-server',
            './src/index',
        ]
    },
    devtool: 'source-map',

    output: {
        path: path.resolve('../static_content/webpack_bundles/'),
        filename: "[name]-[hash].js",
        publicPath: 'http://localhost:3000/static/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
        // publicPath: '/static/webpack_bundles/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BundleTracker({filename: '../static_content/webpack-stats.json'}),
        // new ExtractTextPlugin("[name]-[hash].css", {
        //     allChunks: true
        // }),
        devFlagPlugin,

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
                        options: {
                            plugins: [
                                [
                                    'react-css-modules',
                                    {
                                        context: __dirname,
                                        generateScopedName: '[name]__[local]___[hash:base64:5]',
                                        filetypes: {
                                            ".styl": "sugarss"
                                        }
                                    }
                                ]
                            ]
                        },
                    }
                ],
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            parser: 'sugarss'
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:5]"
                        }
                    },
                    "postcss-loader" // has separate config, see postcss.config.js nearby
                ]
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