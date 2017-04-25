import { combineReducers } from 'redux';
import {QUERY_HELP, QUERY_HELP_PENDING, QUERY_HELP_SUCCESS, QUERY_HELP_ERROR} from '../constants';

let items = function (state = [], action) {
    switch(action.type) {
        case QUERY_HELP_SUCCESS:
            return action.payload;
        default:
            return state;    
    }
};

export default combineReducers({
    items
});