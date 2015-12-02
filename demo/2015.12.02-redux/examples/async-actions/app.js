var Redux = require('redux');
var thunkMiddleware = require('redux-thunk');

// 传说中的action creator
var addTodo = function(text){
	return {
		type: 'add_todo',
		text: text
	};
};

var addTodoToServer = function(text){

	return function(dispatch){
		setTimeout(function(){
			dispatch(addTodo(text));
		}, 1000);		
	};
};

// 传说中的reducers
var todoReducer = function(state, action){
	
	if(typeof state === 'undefined'){
		return [];
	}
	
	switch(action.type){
		case 'add_todo':
			return state.slice(0).concat({
				text: action.text,
				completed: false
			});
			break;
		default:
			return state;
	}
};

// 定义store
// var store = Redux.createStore(todoReducer);
var createStoreWithMiddleware = Redux.applyMiddleware(
	thunkMiddleware
	)(Redux.createStore);
var store = createStoreWithMiddleware(todoReducer);
var unsubscribe = store.subscribe(function(){
	console.log(store.getState());
});


store.dispatch(addTodo('吃早餐'));
store.dispatch(addTodoToServer('上班'));
// store.dispatch(addTodo('吃午餐'));

// unsubscribe();

