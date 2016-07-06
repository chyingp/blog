var ActionTypes = require('../constants/ActionTypes');

module.exports.addTodo = function(text) {
	return {
		type: ActionTypes.ADD_TODO,
		text: text
	};
}