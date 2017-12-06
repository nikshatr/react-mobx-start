import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import { useStrict } from 'mobx'
import Routes from './routes'
import stores from './stores'
import App from '@containers/App/App'

useStrict(true)

const render = () => (
    ReactDOM.render(
        <AppContainer>
            <Provider {...stores}>
                <Routes />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
)

render(App)

if (module.hot) module.hot.accept('@containers/App/App', () => render(App))
