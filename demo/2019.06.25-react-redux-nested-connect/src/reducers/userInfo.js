import { FETCH_USER_INFO } from '../constans';

export default function(state = {nick: ''}, action) {
    switch(action.type) {
        case FETCH_USER_INFO:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};