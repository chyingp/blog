var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
	render: function () {
		return (
			<button style={{color: this.context.color}}>
				{this.props.children}
			</button>
		);
	}
});

Button.contextTypes = {
	color: React.PropTypes.string
};

var Message = React.createClass({
	render: function () {
		return (
			<div>{this.props.text} <Button>删除</Button></div>
		);
	}
});

var MessageList = React.createClass({

	getChildContext: function () {
		return {
			color: 'green'
		};
	},	

	render: function () {
		var list = [
			{text: 'hello world'},
			{text: 'hello react'}
		];

		return (
			<div>
				{list.map(function (item) {
					return <Message text={item.text} color={item.color} />;
				})}
			</div>
		);
	}
});

MessageList.childContextTypes = {
	color: React.PropTypes.string
};

ReactDOM.render(
	<MessageList />, 
	document.getElementById('app')
);