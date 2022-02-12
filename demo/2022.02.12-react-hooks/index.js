
var renderNode = {
	current: null,
	container: null,
	stateIndex: 0,
	effectIndex: 0
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
			effectList: [],
			eventMap: eventMap,
			mouted: false,
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
	},

	useEffect(callback, deps) {
		const _renderNode = renderNode;
		const _effectIndex = _renderNode.effectIndex;

		_renderNode.current.effectList[_effectIndex] = {callback, deps};
		_renderNode.effectIndex++;
	}
};

const ReactDom = {
	render(reactElement, container) {
		// 跳过state对比的环节，可能导致死循环，比如在useEffect里直接setState

		renderNode.current = reactElement
		renderNode.container = container;
		renderNode.stateIndex = 0;
		renderNode.effectIndex = 0;

		container.innerHTML = '';
		container.appendChild(reactElement.render());

		reactElement.effectList.forEach(({callback, deps}) => {

			if (reactElement.mouted === false) {
				callback();
			} else {
				if (!deps || deps.length !== 0) {
					callback();
				}
			}
		});

		reactElement.mouted = true;
	}
};

const { useState, useEffect } = React;

function App() {
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(1);

	useEffect(() => {
		console.log('[1] useEffect is called, and will be called only once.');

		setTimeout(() => {
			setCount(count + 1);
		}, 3000);
	}, []);

	useEffect(() => {
		console.log('[2] useEffect is called, and will be called when mounted and updated.');
	});

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