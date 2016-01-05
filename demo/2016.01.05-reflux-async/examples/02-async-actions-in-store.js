var Reflux = require('reflux');

/**
 * @param {String} options.text 
 * @param {Boolean} options.isSucc 是否成功
 * @param {Function} options.callback 异步回调
 * @param {Number} options.delay 异步延迟的时间
 */
var addToServer = function(options){
	var ret = {code: 0, text: options.text, msg: '添加成功 :)'};

	if(!options.isSucc){
		ret = {code: -1, msg: '添加失败！'};
	}
	
	setTimeout(function(){
		options.callback && options.callback(ret);
	}, options.delay);
};


var TodoActions = Reflux.createActions(['addTodo']);

var state = {
	items: [],
	status: ''
};

var TodoStore = Reflux.createStore({

	init: function(){
		state.items.push('睡觉');
	},

	listenables: [TodoActions],

	onAddTodo: function(text, isSucc){
		var that = this;

		state.status = 'pending';
		that.trigger(state);

		addToServer({
			text: text,
			isSucc: isSucc,
			delay: 500,
			callback: function(ret){
				if(ret.code===0){
					state.status = 'success';
					state.items.push(text);
				}else{
					state.status = 'error';
				}
				that.trigger(state);
			}
		});
	},
	getState: function(){
		return state;
	}
});

TodoStore.listen(function(state){
	console.log('status is: ' + state.status + ', current todos is: ' + state.items);
});

TodoActions.addTodo('起床', true);
TodoActions.addTodo('吃早餐', false);
TodoActions.addTodo('上班', true);