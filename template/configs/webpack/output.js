const { resolve } = require('path')

module.exports = () => ({
    output: {
        path: resolve('dist'),
        filename: process.env.NODE_ENV !== 'production' ? 'build.[name].js' : 'build.[name].[hash].js',
        publicPath: '/'
    }
})
