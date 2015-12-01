var Redux = require('redux');

function dispatch(obj){
	console.log(obj);
}

function addTodo(item){
	return {
		type: 'ADD_TODO',
		item: item
	};
}

dispatch( addTodo({text: '上班'}) );