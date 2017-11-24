var defaultPayloadCreator = function (payload) {
	return payload;
};

module.exports = function(type, payloadCreator){

	var finialPayloadCreator = typeof payloadCreator === 'function'
		? payloadCreator
		: defaultPayloadCreator;

	return function () {
		var payload = finialPayloadCreator.apply(null, arguments);

		if (typeof payload === 'function') {
			return payload;
		} else {
			return {
				type: type,
				payload: payload
			};
		}
	};
};