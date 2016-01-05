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


var TodoActions = Reflux.createActions({
	addTodo: {asyncResult: true}
});

TodoActions.addTodo.listen(function(text, isSucc){
	var that = this;

	if(typeof text !== 'string'){
		that.failed({ret: 999, text: text, msg: '非法参数！'});
		return;
	}

	addToServer({
		text: text,
		isSucc: isSucc,
		delay: 500,
		callback: function(ret){
			if(ret.code===0){
				that.completed(ret);
			}else{
				that.failed(ret);
			}
		}
	});
});


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
		this.trigger(state);
	},

	onAddTodoCompleted: function(ret){
		state.status = 'success';
		state.items.push(ret.text);
		this.trigger(state);
	},

	onAddTodoFailed: function(ret){
		state.status = 'error';
		this.trigger(state);
	},

	getState: function(){
		return state;
	}
});

TodoStore.listen(function(state){
	console.log('status is: ' + state.status + ', current todos is: ' + state.items);
});

// 非法参数
TodoActions.addTodo(true, true);