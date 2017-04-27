import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './ConnectedApp';
import Home from './ConnectedHome';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
	    <div>
			<ul>
				<li><Link to="/app">App</Link></li>
				<li><Link to="/home">Home</Link></li>
			</ul>
			<Route path="/app" component={App} />
			<Route path="/home" component={Home} />
		</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

// 运行命令：
// ../node_modules/webpack/bin/webpack.js