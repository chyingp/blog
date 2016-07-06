var redux = require('redux');

var logger = function(store){
	return function(next){
		return function(action){
			
			return next(action);
		}
	};
};

var timer = function(store){
	return function(next){
		return function(action){
			console.log('timer: ' + action.count);
			action.count++;
			return next(action);
		}
	};
};

var reducer = function(state, action){
	switch(action.type) {
		default:
			return state;
	}
};

var createStore = redux.applyMiddleware(logger, timer)(redux.createStore);
var store = createStore(reducer, {});
store.dispatch({type: 'addTodo', count: 1});

// console.log(redux);