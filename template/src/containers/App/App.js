import React from 'react'
import { element } from 'prop-types'
import Wrapper from '@components/Wrapper/Wrapper'

const App = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

App.propTypes = {
    children: element
}

export default App
