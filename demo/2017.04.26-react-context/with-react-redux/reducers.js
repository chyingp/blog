import { combineReducers } from 'redux';

function items (state = [], action) {
	switch(action.type) {
		case 'QUERY_ITEMS':
			return action.payload;
		default:
			return state;	
	}	
}

export default combineReducers({
	items
});

