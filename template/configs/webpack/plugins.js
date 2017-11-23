import { resolve } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractWebpackPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const plugins = () => ({
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

export default plugins
