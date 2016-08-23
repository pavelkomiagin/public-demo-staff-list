import './styles/index.sass'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import List from './containers/List'
import Profile from './containers/Profile'
import Layout from './containers/Layout'
import { Router, Route, browserHistory } from 'react-router'

const store = configureStore()

render(
	<Provider store={store}>
		<Layout>
			<Router history={browserHistory}>
					<Route path='/' component={List} />
					<Route path='/profile/:profileId' component={Profile} />
					<Route path='/profile/:profileId/edit' component={Profile} />
			</Router>
		</Layout>
	</Provider>,
	document.getElementById('root')
)
