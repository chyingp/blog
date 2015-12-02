var Redux = require('redux');

function addTodo(text){
	return {
		type: 'add_todo',
		text: text
	};
}

function completeTodo(index){
	return {
		type: 'complete_todo',
		index: index
	};
}

function setVisibilityFilter(visibilityState){
	return {
		type: 'set_visibility_filter',
		filter: visibilityState
	};
}

function todos(state, action){
	console.log('reducer: todos is called! state is -> ' + state + ', action is -> ' + action);

	if(typeof state === 'undefined') state = [];
	
	var newState = state.slice(0);

	switch(action.type){
		case 'add_todo':
			return newState.concat({
				text: action.text,
				completed: false
			});
			break;
		case 'complete_todo':
			newState[action.index].completed = true;
			return newState;
			break;
		default:
			return state;
			break;
	}
}

function visibilityFilter(state, action){
	console.log('reducer: visibilityFilter is called! state is -> ' + state + ', action is -> ' + action);
	if(typeof state === 'undefined') state = 'show_all';

	switch(action.type){
		case 'set_visibility_filter':
			return action.filter;
			break;
		default:
			return state;
			break;
	}
}

var todoApp = Redux.combineReducers({	
	todos: todos,
	visibilityFilter: visibilityFilter
});

var store = Redux.createStore(todoApp);
var unsubscribe1 = store.subscribe(function(){
	console.log('1: ' + store.getState());
});
var unsubscribe2 = store.subscribe(function(){
	console.log('2: ' + store.getState());
});

store.dispatch(addTodo('上班'));
store.dispatch(addTodo('逛街'));
store.dispatch(completeTodo(0));
store.dispatch(setVisibilityFilter('hide_all'));

unsubscribe1();
unsubscribe2();