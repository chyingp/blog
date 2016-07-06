var types = [
	'ADD_TODO'
];

types.forEach(function(actionType){
	module.exports[actionType] = actionType;
});