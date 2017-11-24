var _ = require('lodash');

module.exports = function (reducerMap) {

	var initialState;

	if(reducerMap.getInitialState){
		initialState = reducerMap.getInitialState();
	}

	return function (state = initialState, action) {

		state = _.clone(state);

		var type = action.type;
		var reducer = reducerMap[type];

		if(typeof reducer === 'function'){
			return reducer(state, action);
		}else{
			return state;
		}
	};
};