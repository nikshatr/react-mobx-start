import { resolve } from 'path'

const resolve = () => ({
    resolve: {
        extensions: ['.js', '.jsx', '.pcss', '.css', '.postcss', '.scss', '.sss'],
        alias: {
            '@': path.resolve('src'),
            '@assets': path.resolve('src/assets'),
            '@components': path.resolve('src/components'),
            '@containers': path.resolve('src/containers'),
            '@pages': path.resolve('src/pages'),
            '@stores': path.resolve('src/stores'),
            '@styles': path.resolve('src/styles')
        }
    }
})

export default resolve
