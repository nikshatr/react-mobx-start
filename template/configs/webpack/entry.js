module.exports = () => ({
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './client.js'
        ],
        vendor: ['react', 'react-dom', 'react-router-dom', 'mobx', 'mobx-react', 'react-transition-group']
    }
})
