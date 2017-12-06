const { resolve } = require('path')

module.exports = () => ({
    resolve: {
        extensions: ['.js', '.jsx', '.pcss', '.css', '.postcss', '.scss', '.sss'],
        alias: {
            '@': resolve('src'),
            '@components': resolve('src/components'),
            '@containers': resolve('src/containers'),
            '@HOC': resolve('src/HOC'),
            '@pages': resolve('src/pages'),
            '@routes': resolve('src/routes'),
            '@stores': resolve('src/stores'),
        }
    }
})
