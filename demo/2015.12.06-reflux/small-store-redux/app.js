var Redux = require('redux');

var GroupActions = {
	getGroups: function(groups){
		return {
			type: 'get_groups',
			groups: groups
		};
	},

	getGroupsFromServer: function(){
		var that = this,
			groups = [0, 1, 2];
		return function(dispatch){
			setTimeout(function(){
				dispatch(that.getGroups(groups));
			}, 1000);
		};
	}
};

var FriendActions = {
	getFriendList: function(groupid){
		return {
			type: 'get_friend_list',
			groupid: groupid
		};
	}
};

var GroupReducer = function(state, action){
	if(typeof state==='undefined'){
		return {
			status: '',
			items: []
		};
	}
	
	switch(action.type){
		case 'get_groups':
			return Object.assign({}, state, {
				items: action.groups
			});
			break;
		default: 
			return state;
	}
};

var store = Redux.createStore(GroupReducer);
store.dispatch(getGroupsFromServer());