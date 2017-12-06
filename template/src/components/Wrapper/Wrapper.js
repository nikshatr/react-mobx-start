import React from 'react'
import { element } from 'prop-types'

import styles from './Wrapper.pcss'

const Wrapper = ({ children }) => (
    <div className={styles.wrapper}>
        {children}
    </div>
)

Wrapper.propTypes = {
    children: element
}

export default Wrapper
