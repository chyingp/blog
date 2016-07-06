var reflux = require('reflux');

var TodoActions = reflux.createActions({
	add: {asyncResult: true}
});

TodoActions.add.listen(function(){
	console.log('actions onAdd is called!');
	setTimeout(function(){
		console.log('actions onAdd is completed!');
	}, 1000);
});

var TodoStore = reflux.createStore({
	listenables: TodoActions,
	onAdd: function(){
		console.log('store onAdd is called!');
	},
	onAddCompleted: function(){
		console.log('store onAddCompleted is called!');
	},
	onAddFailed: function(){
		console.log('store onAddFailed is called!');
	}
});

TodoActions.add();