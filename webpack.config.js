var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/scripts/index')
    ],
    target: 'web',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src')
    }
};