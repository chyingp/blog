import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render () {
		return <div>App</div>
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

// 运行命令：
// ../node_modules/webpack/bin/webpack.js