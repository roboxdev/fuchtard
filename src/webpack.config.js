var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,

    entry: [
        './assets/js/entrypoint',
        './assets/css/entrypoint'
    ],

    output: {
        path: path.resolve('../webpack_bundles/'),
        filename: "[name]-[hash].js",
    },
    plugins: [
        new BundleTracker({filename: '../webpack-stats.json'}),
        new ExtractTextPlugin("[name]-[hash].css", {
            allChunks: true
        })
        // new ExtractTextPlugin("style.css", { allChunks: true })
    ],


    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015']} },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules', '../bower_components'],
        extensions: ['', '.js']
    }
};