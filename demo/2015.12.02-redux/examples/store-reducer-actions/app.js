var Redux = require('redux');

// 传说中的action creator
var addTodoActions = function(text){
	return {
		type: 'add_todo',
		text: text
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
var store = Redux.createStore(todoReducer);
var unsubscribe = store.subscribe(function(){
	console.log(store.getState());
});


store.dispatch(addTodoActions('吃早餐'));
store.dispatch(addTodoActions('上班'));
store.dispatch(addTodoActions('吃午餐'));

unsubscribe();

