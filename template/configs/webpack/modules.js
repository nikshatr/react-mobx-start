import ExtractWebpackPlugin from 'extract-text-webpack-plugin'

const modules = () => ({
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.(pcss|scss|postcss|sass|sss|css)$/,
                use: process.env.NODE_ENV !== 'production'
                ? ['style-loader',
                { loader: 'css-loader', options: { modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]', importLoaders: 1 } },
                { loader: 'postcss-loader' }]
                : ExtractWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { modules: true, localIdentName: '[hash:base64:5]', importLoaders: 1, minimize: true } },
                        { loader: 'postcss-loader' }
                    ]
                })
            }
        ]
    }
})

export default modules