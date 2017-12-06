const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractWebpackPlugin = require('extract-text-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = () => ({
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                  'NODE_ENV': process.env.NODE_ENV !== 'production' ? JSON.stringify('development') : JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            template: 'template.html',
            inject: 'body'
        }),
        new ExtractWebpackPlugin({
            filename: process.env.NODE_ENV !== 'production' ? 'build.[name].css' : 'build.[name].[hash].css',
            allChunks: true,
            disable: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ]
})
