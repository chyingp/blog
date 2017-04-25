// https://help.github.com/search/search.json

// let QUERY_HELP = 'QUERY_HELP';
// let QUERY_HELP_PENDING = 'QUERY_HELP_PENDING';
// let QUERY_HELP_SUCCESS = 'QUERY_HELP_SUCCESS';
// let QUERY_HELP_ERROR = 'QUERY_HELP_ERROR';

import {QUERY_HELP, QUERY_HELP_PENDING, QUERY_HELP_SUCCESS, QUERY_HELP_ERROR} from '../constants';

let queryHelpPending = () => ({type: QUERY_HELP_PENDING});
let queryHelpSuccess = (items) => ({type: QUERY_HELP_SUCCESS, payload: items});
let queryHelpError = () => ({type: QUERY_HELP_ERROR});

let queryHelp = () => (dispatch) => {
    dispatch ( queryHelpPending() );

    fetch('https://help.github.com/search/search.json')
        .then(response => response.json())
        .then(data => data.entries.filter(v => !!v.title) )
        .then(items => dispatch( queryHelpSuccess(items) ) )
};

export { queryHelp };