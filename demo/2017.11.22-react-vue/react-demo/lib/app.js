// import 'react'
// import 'react-dom'
// import 'redux'
// import 'react-redux'
// import 'react-router-redux'

// import '../../containers/login'

// console.log('app')

import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider, connect } from 'react-redux'
import reducers from '../reducers'
import * as actions from '../actions'

// import App from '../components/App'
// import Add from '../containers/Add'

import Login from '../containers/Login'
import Reg from '../containers/Reg'

// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory()
const middleware = routerMiddleware(history)

// const thunkCreateStore = applyMiddleware(thunk)(createStore)
// const store = thunkCreateStore(reducer)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const mapStateToProps = function(state){
	return state
}

// const history = syncHistoryWithStore(browserHistory, store)
// const WrappedApp = connect(mapStateToProps, actions)(App)

// 参考：https://github.com/reactjs/react-router-redux

// render(
//   <Provider store={store}>
// 	<Router history={history}>
// 		<Route path="/" component={App}>
			
// 			<Route path="/login" component={Login}/>
// 			<Route path="/reg" component={Reg}/>			
//       </Route>      
//     </Router>      
//   </Provider>,
//   document.getElementById('root')
// )

render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
			<Route path="/login" component={Login}/>
			<Route path="/reg" component={Reg}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('container')
)