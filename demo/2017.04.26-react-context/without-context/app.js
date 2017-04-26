var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
	render: function () {
		return (
			<button style={{color: this.props.color}}>
				{this.props.children}
			</button>
		);
	}
});

var Message = React.createClass({
	render: function () {
		return (
			<div>{this.props.text} <Button color={this.props.color}>删除</Button></div>
		);
	}
});

var MessageList = React.createClass({
	render: function () {
		var color = 'green';
		var list = [
			{text: 'hello world'},
			{text: 'hello react'}
		];

		return (
			<div>
				{list.map(function (item) {
					return <Message text={item.text} color={color} />;
				})}
			</div>
		);
	}
});

ReactDOM.render(
	<MessageList />, 
	document.getElementById('app')
);