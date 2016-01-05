var Reflux = require('reflux');

var TodoActions = Reflux.createActions({
	addTodo: {sync: true}
});

var state = [];
var TodoStore = Reflux.createStore({
	listenables: [TodoActions],
	onAddTodo: function(text){
		state.push(text);
		this.trigger(state);
	},
	getState: function(){
		return state;
	}
});

TodoStore.listen(function(state){
	console.log('state is: ' + state);	
});
TodoActions.addTodo('起床');
TodoActions.addTodo('吃早餐');
TodoActions.addTodo('上班');