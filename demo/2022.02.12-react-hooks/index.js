
var renderNode = {
	current: null,
	container: null,
	stateIndex: 0
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
			stateList: [],
			eventMap: eventMap,
			render: render
		};

		return reactElement;
	},

	useState(initialState) {

		const _renderNode = renderNode;
		const _stateIndex = _renderNode.stateIndex;
		
		_renderNode.current.stateList[_stateIndex] = _renderNode.current.stateList[_stateIndex] || initialState;
		_renderNode.stateIndex++;
		
		return [
			_renderNode.current.stateList[_stateIndex],
			(newState) => {
				_renderNode.current.stateList[_stateIndex] = newState;
 
				ReactDom.render(_renderNode.current, _renderNode.container);
			}
		];
	}
};

const ReactDom = {
	render(reactElement, container) {

		renderNode.current = reactElement
		renderNode.container = container;
		renderNode.stateIndex = 0;

		container.innerHTML = '';
		container.appendChild(reactElement.render());
	}
};

const useState = React.useState;

function App() {
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(1);

	return React.createElement('div', {
		innerHTML: `
			<div id="count">count is ${count}</div>
			<div id="number">number is ${number}</div>`
	}, {
		onclick(evt) {
			const el = evt.target;
			if (el.id === 'count') {
				setCount(count + 1);
			} else if (el.id === 'number') {
				setNumber(number + 1);
			}
			
		}
	});
}

ReactDom.render(
	React.createElement(App),
	document.getElementById('root')
);