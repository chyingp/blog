module.exports = function(type, reducer, initialState){
	return function (state, action) {
		if(action.type !== type) return state;

		return reducer(type, action);
	};
};