var Redux = require('redux');
var React = require('react');
var thunk = require('redux-thunk');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var connect = require('react-redux').connect;

// 传说中的action creator
var addTodoActions = function(text){
	return {
		type: 'add_todo',
		text: text
	};
};

// 传说中的reducers
var todoReducer = function(state, action){
	
	if(typeof state === 'undefined'){
		return [];
	}
	
	switch(action.type){
		case 'add_todo':
			return state.slice(0).concat({
				text: action.text,
				completed: false
			});
			break;
		default:
			return state;
	}
};

var App = React.createClass({
	handleAdd: function(){
		var value = ReactDOM.findDOMNode(this.refs.todo).value.trim();
		if(value)
			this.props.dispatch(addTodoActions(value));
	},
	render: function(){
		return (
			<div>
				<input ref="todo" type="text" placeholder="输入todo项" />
				<button onClick={this.handleAdd}>点击添加</button>
				<ul>
					{this.props.items.map(function(item){
						return <li>{item.text}</li>;
					})}
				</ul>
			</div>			
			);
	}
});

// 将 state 映射到 App 的 state.items 上
function mapStateToProps(state) {
  return {
    items: state
  };
}

var store = Redux.createStore(todoReducer);
var ConnectedApp = connect(mapStateToProps)(App);	// 映射

ReactDOM.render(
	<Provider store={store}>
		<ConnectedApp />
	</Provider>,
	document.getElementById('container')
	);

