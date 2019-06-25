// import PropTypes from 'prop-types';
import React from 'react';
// React.PropTypes = PropTypes;

import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ConnectedApp from './components/ConnectedApp';
import finalReducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(finalReducers);

ReactDom.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('container')
);
