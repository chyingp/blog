let queryItems = function (items) {
	return {
		type: 'QUERY_ITEMS',
		payload: items
	};
};

export { queryItems };