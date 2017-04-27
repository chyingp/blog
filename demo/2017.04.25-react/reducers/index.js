import { combineReducers } from 'redux';
import {
    QUERY_HELP, QUERY_HELP_PENDING, QUERY_HELP_SUCCESS, QUERY_HELP_ERROR,
    SELECT_HELP
} from '../constants';

// const initialState = {
//     items: [],
//     curId: ''
// };

function items (state = [], action) {
    switch(action.type) {
        case QUERY_HELP_SUCCESS:
            return action.payload;
        default:
            return state;    
    }
};

function curId (state = '', action) {
    switch(action.type) {
        case SELECT_HELP:
            return action.payload;
        default:
            return state;    
    }
}

export default { items };

// export default combineReducers({
//     items,
//     curId
// });