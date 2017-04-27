import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from '../reducers';
import Home from './Home';
import HelpDetail from './HelpDetail';

import { Route } from 'react-router';
import { createBrowserHistory } from 'history'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

const history = createBrowserHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware, ReduxThunk)
)

// let createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
// let store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route path="/home/:id" component={Home}/>
        <Route path="/detail/:id" component={HelpDetail}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('container')
)
