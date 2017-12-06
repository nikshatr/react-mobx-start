const { resolve } = require('path')

module.exports = () => ({
    context: resolve('src'),
    devtool: process.env.NODE_ENV !== 'production' ? 'cheap-module-source-map' : false,
    cache: process.env.NODE_ENV !== 'production' ? true : false
})
