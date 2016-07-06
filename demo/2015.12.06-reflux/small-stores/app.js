var Reflux = require('reflux');

var FriendGroupActions = Reflux.createActions({
	getGroups: {asyncResult: true},
	removeGroup: {asyncResult: true}
});

// 好友分组
var FriendGroupStore = Reflux.createStore({
	payload: {
		status: '',
		data: []
	},
	listenables: [FriendGroupActions],
	onGetGroups: function(){
		var that = this,
			groups = [0, 1, 2, 3];

		that.payload.status = 'progress';
		setTimeout(function(){
			that.payload.status = 'success';
			that.payload.data = groups;
			that.trigger(groups);
		}, 1000);
	},
	getPayload: function(){
		return this.payload;
	}
});

var FriendListActions = Reflux.createActions({
	getFriendList: {asyncResult: true}
});

// 好友列表
var FriendListStore = Reflux.createStore({
	listenables: [FriendListActions],
	payload: [],
	onGetFriendList: function(){
		var that = this,
			list = [{id:0, name:'hello'}, {id:1, name:'world'}];

		setTimeout(function(){
			that.payload = list;
			that.trigger(list);			
		}, 1000);
	},
	getPayload: function(){
		return this.payload;
	}
});

var data = {
	groups: FriendGroupStore.getPayload(),
	frineds: FriendListStore.getPayload()
};

var AppStore = Reflux.createStore({
	init: function(){		

		this.listenTo(FriendGroupStore, this.onFriendGroupFetched);
		this.listenTo(FriendListStore, this.onFriendListFetched);
	},
	onFriendGroupFetched: function(groups){
		console.log('groups fetched: ' + groups);

		data.groups = FriendGroupStore.getPayload();
		this.trigger();		

		FriendListActions.getFriendList(groups[0]);		
	},
	onFriendListFetched: function(lists){
		console.log('list fetched: ' + lists);
		this.trigger();
	}
});

FriendGroupActions.getGroups();