const webpack = require('webpack');

const { isDevelopment, isTest } = require('../configuration');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const basePlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        __DEV__: isDevelopment
    }),
    new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
    new CopyWebpackPlugin([{
        from: './src/assets/favicon.ico',
        to: 'assets'
    }]),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.NoErrorsPlugin()
];
const developmentPlugins = [new webpack.HotModuleReplacementPlugin()];
const productionPlugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
];

module.exports = isTest ? undefined : basePlugins.concat(isDevelopment ?
    developmentPlugins :
    productionPlugins
);
