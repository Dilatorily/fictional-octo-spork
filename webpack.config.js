'use strict';

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        application: ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    plugins: [
        new htmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
        new copyWebpackPlugin([{ from: './src/assets/favicon.ico', to: 'assets' }])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
