
var renderNode = {
	current: null,
	container: null
};

const React = {
	createElement(type, props, eventMap) {

		let render = () => {};

		if (typeof type === 'string') {
			render = () => {
				const el = document.createElement(type);
			
				for(let propName in props) {
					el[propName] = props[propName];
				}
			
				for(let eventName in eventMap) {
					el[eventName] = eventMap[eventName];
				}
				return el;
			};
		} else {
			render = () => {
				return type().render();
			};
		}

		const reactElement = {
			type: type,
			props: props,
			state: null,
			eventMap: eventMap,
			render: render
		};

		return reactElement;
	},

	useState(initialState) {

		const _renderNode = renderNode;
		_renderNode.current.state = _renderNode.current.state || initialState;
		
		return [
			_renderNode.current.state,
			(newState) => {
				_renderNode.current.state = newState;
				// ReactDom.render(App, document.getElementById('root'));
				ReactDom.render(_renderNode.current, _renderNode.container);
			}
		];
	}
};

const ReactDom = {
	render(reactElement, container) {

		renderNode.current = reactElement
		renderNode.container = container;

		container.innerHTML = '';
		container.appendChild(reactElement.render());
	}
};

const useState = React.useState;

function App() {
	const [count, setCount] = useState(0);

	return React.createElement('div', {
		innerHTML: count
	}, {
		onclick() {
			setCount(count + 1);
		}
	});
}

ReactDom.render(
	React.createElement(App),
	document.getElementById('root')
);


{/* <App>
	<Header></Header>
	<Header></Header>
</App> */}


// import react from 'react'
// import {useState} from 'react'
// import {render} from 'react-dom'

// var _state = {};
// function useState(initialState) {
// 	_state = initialState;
// 	return [
// 		_state,
// 		function(state){
// 			_state = state;
// 		}
// 	];
// }

// class Header extends React.Component {
//   	constructor(props) {
//     	this.state = {};
//     }
// 	render() {
//     	return <div>header</div>;
//     }
// }

// function Footer() {
// 	const [count, setCount] = useState(0);
// 	return <div onClick={()=> setCount(count)}>footer</div>;
// }

// function App() {
// 	return (
//     	<div>
//       		<Header/>
//         	<Footer/>
//       	</div>
//     );
// }

// ReactDom.render(
// 	<App/>, 
// 	document.getElementById('root')
// );

// App.render()
// 	=> Header().render()
// 	=> Footer.render()