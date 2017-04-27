import App from './App';

const QUERY_ITEMS = 'QUERY_ITEMS';

const queryItems = (items) => ({
	type: QUERY_ITEMS,
	payload: items
});

const queryItemsAsync = (items) => (dispatch) => {
	setTimeout(() => {
		dispatch( queryItems(['async', ...items]) );
	}, 1000)
};

export { queryItemsAsync, queryItems };