import { resolve } from 'path'

const output = () => ({
    output: {
        path: path.resolve('dist'),
        filename: process.env.NODE_ENV !== 'production' ? 'build.[name].js' : 'build.[name].[hash].js',
        publicPath: '/'
    }
})

export default output
