import { combineReducers } from 'redux';

const QUERY_ITEMS = 'QUERY_ITEMS';

const items = (state = [], action) => {

	switch(action.type) {
		case QUERY_ITEMS:
			return [...action.payload];
		default:
			return state;			
	}
};

export default { items };
// export default combineReducers({ items });