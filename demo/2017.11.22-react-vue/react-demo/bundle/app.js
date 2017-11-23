webpackJsonp([0],{

/***/ "2D3x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__("2KeS");

var _actions = __webpack_require__("vyGZ");

var _reactRouterRedux = __webpack_require__("MT/C");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
// import { handleActions } from 'redux-actions'


var errorCodes = function errorCodes() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		// case 'ADD_ERROR_CODE':
		// 	return [state.items, action.payload]
		case 'FETCHED_ERROR_CODE':
			return action.payload.items;
		case 'ADD_ERROR_CODE_SUCCESS':
			return [action.payload].concat(_toConsumableArray(state));
		case 'REMOVE_ERROR_CODE_SUCCESS':
			return state.filter(function (item) {
				return item._id !== action.payload._id;
			});
		default:
			return state;
	}
};

var initialState = {
	status: '',
	ret_code: '',
	ret_msg: ''
};

var errorCode = function errorCode() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_ERROR_CODE':
			return action.payload;
		case 'ADD_ERROR_CODE_PENDING':
			return _extends({}, state, {
				status: 'pending'
			});
		case 'ADD_ERROR_CODE_SUCCESS':
			return _extends({}, state, {
				status: 'success'
			});
		case 'ADD_ERROR_CODE_ERROR':
			return _extends({}, state, {
				status: 'error',
				ret_code: action.payload.ret_code,
				ret_msg: action.payload.ret_msg
			});
		default:
			return state;
	}
};

var categoryInitialState = {
	status: '',
	errMsg: ''
};

var category = function category() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : categoryInitialState;
	var action = arguments[1];

	switch (action.type) {
		case 'ADD_CATEGORY_PENDING':
			return _extends({}, state, {
				status: 'pending'
			});
		case 'ADD_CATEGORY_SUCCESS':
			return _extends({}, state, {
				status: 'success'
			});
		case 'ADD_CATEGORY_ERROR':
			return _extends({}, state, {
				status: 'error'
			});
		default:
			return state;
	}
};

// 分类列表
var categoriesInitialState = {
	status: '',
	items: []
};

var categories = function categories() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : categoriesInitialState;
	var action = arguments[1];

	switch (action.type) {
		case 'GET_CATEGORIES_PENDING':
			return _extends({}, state, {
				status: 'pending'
			});
		case 'GET_CATEGORIES_SUCCESS':
			return _extends({}, state, action.payload.data, {
				status: 'success'
			});
		case 'GET_CATEGORIES_ERROR':
			return _extends({}, state, {
				status: 'error'
			});
		case 'ADD_CATEGORY_SUCCESS':
			return _extends({}, state, {
				items: [].concat(_toConsumableArray(state.items), [action.payload])
			});
		case 'REMOVE_CATEGORY_SUCCESS':
			return _extends({}, state, {
				items: state.items.filter(function (item) {
					return item._id !== action.payload._id;
				})
			});
		default:
			return state;
	}
};

var editCategoryInitialState = {
	item: {},
	show: false,
	status: ''
};

var editingCategory = function editingCategory() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : editCategoryInitialState;
	var action = arguments[1];

	switch (action.type) {
		case 'START_EDIT_CATEGORY':
			return _extends({}, state, {
				show: true,
				item: action.payload
			});
		case 'STOP_EDIT_CATEGORY':
			return _extends({}, state, {
				show: false,
				item: {}
			});
		case 'MOD_CATEGORY_PENDING':
			return _extends({}, state, {
				status: 'pending'
			});
		case 'MOD_CATEGORY_SUCCESS':
			return _extends({}, state, {
				show: false,
				status: 'success'
			});
		case 'MOD_CATEGORY_ERROR':
			return _extends({}, state, {
				status: 'error'
			});
		default:
			return state;
	}
};

var modCodeInitialState = {
	getCodeStatus: '',
	modCodeStatus: '',
	item: {}
};

var modCode = function modCode() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : modCodeInitialState;
	var action = arguments[1];

	switch (action.type) {
		case 'QUERY_ERROR_CODE_DETAIL_SUCCESS':
			return _extends({}, state, {
				getCodeStatus: 'success',
				item: action.payload
			});
			return;
		case 'MOD_CATEGORY_PENDING':
			return _extends({}, state, {
				modCodeStatus: 'pending'
			});
		case 'MOD_CATEGORY_SUCCESS':
			return _extends({}, state, {
				modCodeStatus: 'success'
			});
		case 'MOD_CATEGORY_ERROR':
			return _extends({}, state, {
				modCodeStatus: 'error'
			});
		default:
			return state;
	}
};

// const reducer = combineReducers({
// 	category: category,  // 分类
// 	categories: categories,  // 分类列表
// 	editingCategory: editingCategory,
// 	code: errorCode,
// 	modCode: modCode,
// 	items: errorCodes,
// 	routing: routerReducer
// })

var reducer = {
	category: category, // 分类
	categories: categories, // 分类列表
	editingCategory: editingCategory,
	code: errorCode,
	modCode: modCode,
	items: errorCodes
	// routing: routerReducer
};

exports.default = reducer;

/***/ }),

/***/ "BzeU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // app.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from 'react-weui';
// //import styles
// import 'weui';
// import 'react-weui/build/packages/react-weui.css';

// const App = () => <Button>hello wechat</Button>;

// ReactDOM.render((
//     <App/>
// ), document.getElementById('container'));

var _reactRedux = __webpack_require__("RH2O");

var _actions = __webpack_require__("vyGZ");

var _Login = __webpack_require__("mDAM");

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return _extends({}, state.code, {
		categories: state.categories
	});
};

var mapDispatchToProps = {
	login: _actions.login
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login2.default);

/***/ }),

/***/ "CQVi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import 'react'
// import 'react-dom'
// import 'redux'
// import 'react-redux'
// import 'react-router-redux'

// import '../../containers/login'

// console.log('app')

// import App from '../components/App'
// import Add from '../containers/Add'

// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _redux = __webpack_require__("2KeS");

var _reduxThunk = __webpack_require__("4ufr");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRedux = __webpack_require__("RH2O");

var _reducers = __webpack_require__("2D3x");

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = __webpack_require__("vyGZ");

var actions = _interopRequireWildcard(_actions);

var _Login = __webpack_require__("BzeU");

var _Login2 = _interopRequireDefault(_Login);

var _Reg = __webpack_require__("bFv7");

var _Reg2 = _interopRequireDefault(_Reg);

var _createBrowserHistory = __webpack_require__("ciQf");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouter = __webpack_require__("CIox");

var _reactRouterRedux = __webpack_require__("MT/C");

var _App = __webpack_require__("Q25t");

var _App2 = _interopRequireDefault(_App);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);

history.listen(function (location, action) {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});

// const thunkCreateStore = applyMiddleware(thunk)(createStore)
// const store = thunkCreateStore(reducer)

var store = (0, _redux.createStore)((0, _redux.combineReducers)(_extends({}, _reducers2.default, {
  router: _reactRouterRedux.routerReducer
})), (0, _redux.applyMiddleware)(middleware));

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

// const history = syncHistoryWithStore(browserHistory, store)
// const WrappedApp = connect(mapStateToProps, actions)(App)

// 参考：https://github.com/reactjs/react-router-redux

// render(
//   <Provider store={store}>
// 	<Router history={history}>
// 		<Route path="/" component={App}>

// 			<Route path="/login" component={Login}/>
// 			<Route path="/reg" component={Reg}/>			
//       </Route>      
//     </Router>      
//   </Provider>,
//   document.getElementById('root')
// )

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterRedux.ConnectedRouter,
    { history: history },
    _react2.default.createElement(_App2.default, { history: history })
  )
), document.getElementById('container'));

/***/ }),

/***/ "GvAl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reg = function (_React$Component) {
  _inherits(Reg, _React$Component);

  function Reg(props) {
    _classCallCheck(this, Reg);

    var _this = _possibleConstructorReturn(this, (Reg.__proto__ || Object.getPrototypeOf(Reg)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Reg, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        '\u6CE8\u518C\u9875\u9762'
      );
    }
  }]);

  return Reg;
}(_react2.default.Component);

exports.default = Reg;

/***/ }),

/***/ "Q25t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__("CIox");

var _Login = __webpack_require__("BzeU");

var _Login2 = _interopRequireDefault(_Login);

var _Reg = __webpack_require__("bFv7");

var _Reg2 = _interopRequireDefault(_Reg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {};
    _this.goToLogin = _this.goToLogin.bind(_this);
    _this.goToReg = _this.goToReg.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'goToLogin',
    value: function goToLogin() {
      this.props.history.push('/login');
    }
  }, {
    key: 'goToReg',
    value: function goToReg() {
      this.props.history.push('/reg');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { href: 'javascript:void(0)', onClick: this.goToLogin },
          '\u767B\u5F55'
        ),
        _react2.default.createElement(
          'a',
          { href: 'javascript:void(0)', onClick: this.goToReg },
          '\u6CE8\u518C'
        ),
        _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/reg', component: _Reg2.default })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ "bFv7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__("RH2O");

var _actions = __webpack_require__("vyGZ");

var _Reg = __webpack_require__("GvAl");

var _Reg2 = _interopRequireDefault(_Reg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return _extends({}, state.code, {
		categories: state.categories
	});
};

var mapDispatchToProps = {
	reg: _actions.reg
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Reg2.default);

/***/ }),

/***/ "mDAM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        '\u767B\u5F55\u9875\u9762'
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ }),

/***/ "vyGZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// import { createAction } from 'redux-actions';
// import 'whatwg-fetch'
// import { stringify } from 'querystring'

// 查询错误码列表（已返回）
var fetchedErrorCode = exports.fetchedErrorCode = function fetchedErrorCode(data) {
	return {
		type: 'FETCHED_ERROR_CODE',
		payload: data
	};
};

// 查询错误码列表
var queryErrorCode = exports.queryErrorCode = function queryErrorCode() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return function (dispatch) {
		fetch('/service/code/query?' + stringify(options)).then(function (response) {
			return response.json();
		}).then(function (body) {
			dispatch(fetchedErrorCode(body.data));
		});
	};
};

// 新增错误码（成功）
var addErrorCodeSuccess = exports.addErrorCodeSuccess = function addErrorCodeSuccess(data) {
	return {
		type: 'ADD_ERROR_CODE_SUCCESS',
		payload: data
	};
};

// 新增错误码（失败）
var addErrorCodeError = exports.addErrorCodeError = function addErrorCodeError(data) {
	return {
		type: 'ADD_ERROR_CODE_ERROR',
		payload: data
	};
};

// 新增错误码（处理中）
var addErrorCodePending = exports.addErrorCodePending = function addErrorCodePending() {
	return {
		type: 'ADD_ERROR_CODE_PENDING'
	};
};

// 新增错误码
var addErrorCode = exports.addErrorCode = function addErrorCode(options) {
	return function (dispatch) {

		dispatch(addErrorCodePending());

		fetch('/service/code/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(options)
		}).then(function (response) {
			return response.json();
		}).then(function (data) {
			if (data.ret_code === '0') {
				dispatch(addErrorCodeSuccess(data.data));
			} else {
				dispatch(addErrorCodeError(data));
			}
		});
	};
};

/***/ })

},["CQVi"]);