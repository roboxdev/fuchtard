var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});


module.exports = {
    context: __dirname,

    entry: {
        'main': [
            // './assets/js/entrypoint',
            // './assets/css/entrypoint'
        ],
        'app': [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './assets/js/index',
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
        new webpack.NoErrorsPlugin(),
        new BundleTracker({filename: '../static_content/webpack-stats.json'}),
        new ExtractTextPlugin("[name]-[hash].css", {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        devFlagPlugin,

    ],


    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                // loaders: [
                //     'react-hot',
                //     'babel'
                // ],
                loader: 'babel',
                query: {
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
            },
            {
                test: /\.styl/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader?parser=sugarss'
                ],
            },
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx'],
        root: [
            path.resolve('./assets/js'),
        ]
    }
};