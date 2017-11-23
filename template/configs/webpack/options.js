import { resolve } from 'path'

const options = () => ({
    context: resolve('src'),
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : false,
    cache: process.env.NODE_ENV !== 'production' ? true : false
})

export default options
