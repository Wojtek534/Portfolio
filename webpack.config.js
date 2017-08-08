var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/scripts/index')
    ],
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugis:[
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ]
};