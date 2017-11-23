import React from 'react'
import { element } from 'prop-types'
import DevTools from 'mobx-react-devtools'

const App = ({ children }) => (
    <div>
        {children}
        <DevTools />
    </div>
)

App.propTypes = {
    children: element
}

export default App
