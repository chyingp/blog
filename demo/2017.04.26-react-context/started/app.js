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
		var list = [
			{text: 'hello world', color: 'blue'},
			{text: 'hello react', color: 'red'}
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

ReactDOM.render(
	<MessageList />, 
	document.getElementById('app')
);