import App from './App';

const QUERY_ITEMS = 'QUERY_ITEMS';

const queryItems = (items) => ({
	type: QUERY_ITEMS,
	payload: items
});

export { queryItems };