var createAction = require('./createAction');

module.exports = function(options){
	var actionMap = {};
	for(var type in options){
		actionMap[type] = createAction(type, options[type]);
	}
	return actionMap;
};