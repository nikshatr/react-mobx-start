import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from '@containers/App/App'
import Home from '@pages/Home'

const Routes = () => {
	return (
		<Router>
			<App>
				<Route path='/' component={Home} />
			</App>
		</Router>
	)
}

export default Routes