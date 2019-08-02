'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;
exports.default = connect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storeShape = require('../utils/storeShape');

var _storeShape2 = _interopRequireDefault(_storeShape);

var _shallowEqual = require('../utils/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _isPlainObject = require('../utils/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _wrapActionCreators = require('../utils/wrapActionCreators');

var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMapStateToProps = function defaultMapStateToProps() {
  return {};
};
var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};
var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
  return _extends({}, parentProps, stateProps, dispatchProps);
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Helps track hot reloading.
var nextVersion = 0;

function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  var shouldSubscribe = Boolean(mapStateToProps);
  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
  var finalMapDispatchToProps = (0, _isPlainObject2.default)(mapDispatchToProps) ? (0, _wrapActionCreators2.default)(mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
  var finalMergeProps = mergeProps || defaultMergeProps;
  var shouldUpdateStateProps = finalMapStateToProps.length > 1;
  var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
  var _options$pure = options.pure;
  var pure = _options$pure === undefined ? true : _options$pure;
  var _options$withRef = options.withRef;
  var withRef = _options$withRef === undefined ? false : _options$withRef;

  // Helps track hot reloading.

  var version = nextVersion++;

  function computeStateProps(store, props) {
    var state = store.getState();
    var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

    (0, _invariant2.default)((0, _isPlainObject2.default)(stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
    return stateProps;
  }

  function computeDispatchProps(store, props) {
    var dispatch = store.dispatch;

    var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

    (0, _invariant2.default)((0, _isPlainObject2.default)(dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
    return dispatchProps;
  }

  function _computeNextState(stateProps, dispatchProps, parentProps) {
    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
    (0, _invariant2.default)((0, _isPlainObject2.default)(mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
    return mergedProps;
  }

  return function wrapWithConnect(WrappedComponent) {
    var Connect = (function (_Component) {
      _inherits(Connect, _Component);

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        console.log(`[react-redux] store is changed, and shouldComponentUpdate is called by ${Connect.displayName}`);
        if (!pure) {
          this.updateStateProps(nextProps);
          this.updateDispatchProps(nextProps);
          this.updateState(nextProps);
          return true;
        }

        var storeChanged = nextState.storeState !== this.state.storeState;
        var propsChanged = !(0, _shallowEqual2.default)(nextProps, this.props);
        var mapStateProducedChange = false;
        var dispatchPropsChanged = false;

        if (storeChanged || propsChanged && shouldUpdateStateProps) {
          mapStateProducedChange = this.updateStateProps(nextProps);
        }

        if (propsChanged && shouldUpdateDispatchProps) {
          dispatchPropsChanged = this.updateDispatchProps(nextProps);
        }

        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
          this.updateState(nextProps);
          return true;
        }

        return false;
      };

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.store = props.store || context.store;

        (0, _invariant2.default)(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + _this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + _this.constructor.displayName + '".'));

        _this.stateProps = computeStateProps(_this.store, props);
        _this.dispatchProps = computeDispatchProps(_this.store, props);
        _this.state = { storeState: null };
        _this.updateState();
        return _this;
      }

      Connect.prototype.computeNextState = function computeNextState() {
        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

        return _computeNextState(this.stateProps, this.dispatchProps, props);
      };

      Connect.prototype.updateStateProps = function updateStateProps() {
        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

        var nextStateProps = computeStateProps(this.store, props);
        if ((0, _shallowEqual2.default)(nextStateProps, this.stateProps)) {
          return false;
        }

        this.stateProps = nextStateProps;
        return true;
      };

      Connect.prototype.updateDispatchProps = function updateDispatchProps() {
        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

        var nextDispatchProps = computeDispatchProps(this.store, props);
        if ((0, _shallowEqual2.default)(nextDispatchProps, this.dispatchProps)) {
          return false;
        }

        this.dispatchProps = nextDispatchProps;
        return true;
      };

      Connect.prototype.updateState = function updateState() {
        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

        this.nextState = this.computeNextState(props);
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return typeof this.unsubscribe === 'function';
      };

      Connect.prototype.trySubscribe = function trySubscribe() {
        if (shouldSubscribe && !this.unsubscribe) {
          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
          this.handleChange();
        }
      };

      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        this.trySubscribe();
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        this.tryUnsubscribe();
      };

      Connect.prototype.handleChange = function handleChange() {
        if (!this.unsubscribe) {
          return;
        }

        this.setState({
          storeState: this.store.getState()
        });
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

        return this.refs.wrappedInstance;
      };

      Connect.prototype.render = function render() {
        var ref = withRef ? 'wrappedInstance' : null;
        return _react2.default.createElement(WrappedComponent, _extends({}, this.nextState, { ref: ref }));
      };

      return Connect;
    })(_react.Component);

    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
    Connect.WrappedComponent = WrappedComponent;
    Connect.contextTypes = {
      store: _storeShape2.default
    };
    Connect.propTypes = {
      store: _storeShape2.default
    };

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        if (this.version === version) {
          return;
        }

        // We are hot reloading!
        this.version = version;

        // Update the state and bindings.
        this.trySubscribe();
        this.updateStateProps();
        this.updateDispatchProps();
        this.updateState();
      };
    }

    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
  };
}