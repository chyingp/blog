// import 'react'
// import 'react-dom'
// import 'redux'
// import 'react-redux'
// import 'react-router-redux'

// import '../../containers/login'

// console.log('app')

import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider, connect } from 'react-redux'
import reducer from '../reducers'
import * as actions from '../actions'

import App from '../components/App'
import Add from '../containers/Add'
import Search from '../containers/Search'
import Category from '../containers/Category'

import Edit from '../containers/EditCode'


import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const thunkCreateStore = applyMiddleware(thunk)(createStore)
const store = thunkCreateStore(reducer)

const mapStateToProps = function(state){
	return state
}

const history = syncHistoryWithStore(browserHistory, store)

// const WrappedApp = connect(mapStateToProps, actions)(App)

// 参考：https://github.com/reactjs/react-router-redux

render(
  <Provider store={store}>
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="/add" component={Add}/>
			<Route path="/edit/:id" component={Edit}/>
			<Route path="/search" component={Search}/>
			<Route path="/category" component={Category}/>
      </Route>      
    </Router>      
  </Provider>,
  document.getElementById('root')
)
