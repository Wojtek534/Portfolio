var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src')
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};