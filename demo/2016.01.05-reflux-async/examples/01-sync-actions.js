var Reflux = require('reflux');

var TodoActions = Reflux.createActions({
	addTodo: {sync: true}
});

var state = [];
var TodoStore = Reflux.createStore({
	listenables: [TodoActions],
	init: function(){

	},
	onAddTodo: function(text){
		state.push(text);
	},
	getState: function(){
		return state;
	}
});

TodoActions.addTodo('起床');
TodoActions.addTodo('吃早餐');
TodoActions.addTodo('上班');
console.log(TodoStore.getState());