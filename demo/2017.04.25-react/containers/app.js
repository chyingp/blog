import React from 'react';
import {render} from 'react-dom';
import { queryHelp } from '../actions'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import { Provider, connect } from 'react-redux'
import Home from './Home';
import HelpDetail from './HelpDetail';

class App extends React.Component {
	
	constructor (props) {
		super(props);	
		this.state = {};
	}

	render () {
		return (			
			<div>
				<HelpDetail />
				<Home />
			</div>			
		);
	}
}

// let createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
// let store = createStoreWithMiddleware(reducers);

import { createBrowserHistory } from 'history'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      ReduxThunk
	  // ... other middlewares ...
    ),
  ),
)

import { Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'


render(
	<Provider store={store}>
		<ConnectedRouter history={history}> 
		<div> 
			<Switch>
			<Route exact path="/" component={Home} />
			<Route render={() => (<div>Miss</div>)} />
			</Switch>
		</div>
		</ConnectedRouter>
	</Provider>, 
	document.getElementById('container')
);
