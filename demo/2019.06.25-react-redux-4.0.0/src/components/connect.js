import React, { Component } from 'react';
import storeShape from '../utils/storeShape';
import shallowEqual from '../utils/shallowEqual';
import isPlainObject from '../utils/isPlainObject';
import wrapActionCreators from '../utils/wrapActionCreators';
import hoistStatics from 'hoist-non-react-statics';
import invariant from 'invariant';

const defaultMapStateToProps = () => ({});
const defaultMapDispatchToProps = dispatch => ({ dispatch });
const defaultMergeProps = (stateProps, dispatchProps, parentProps) => ({
  ...parentProps,
  ...stateProps,
  ...dispatchProps
});

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Helps track hot reloading.
let nextVersion = 0;

export default function connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {}) {
  const shouldSubscribe = Boolean(mapStateToProps);
  const finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
  const finalMapDispatchToProps = isPlainObject(mapDispatchToProps) ?
    wrapActionCreators(mapDispatchToProps) :
    mapDispatchToProps || defaultMapDispatchToProps;
  const finalMergeProps = mergeProps || defaultMergeProps;
  const shouldUpdateStateProps = finalMapStateToProps.length > 1;
  const shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
  const { pure = true, withRef = false } = options;

  // Helps track hot reloading.
  const version = nextVersion++;

  function computeStateProps(store, props) {
    const state = store.getState();
    const stateProps = shouldUpdateStateProps ?
      finalMapStateToProps(state, props) :
      finalMapStateToProps(state);

    invariant(
      isPlainObject(stateProps),
      '`mapStateToProps` must return an object. Instead received %s.',
      stateProps
    );
    return stateProps;
  }

  function computeDispatchProps(store, props) {
    const { dispatch } = store;
    const dispatchProps = shouldUpdateDispatchProps ?
      finalMapDispatchToProps(dispatch, props) :
      finalMapDispatchToProps(dispatch);

    invariant(
      isPlainObject(dispatchProps),
      '`mapDispatchToProps` must return an object. Instead received %s.',
      dispatchProps
    );
    return dispatchProps;
  }

  function computeNextState(stateProps, dispatchProps, parentProps) {
    const mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
    invariant(
      isPlainObject(mergedProps),
      '`mergeProps` must return an object. Instead received %s.',
      mergedProps
    );
    return mergedProps;
  }

  return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      shouldComponentUpdate(nextProps, nextState) {
        // shouldComponentUpdate触发的场景
        // 1、dispatch action 后
        // 2、<ConnectedComponent ...props />，外层传入的props发生变化
        if (!pure) {
          this.updateStateProps(nextProps);
          this.updateDispatchProps(nextProps);
          this.updateState(nextProps);
          return true;
        }
        // store.getState() 是否发生变化，大概率会变化，除非之前 dispatch 的action没有导致任何状态改变
        // 潜在陷阱：在这种情况下 reducer 里面需要返回的是老的state，而不是拷贝后的state，否则也会判断为已经改变，比如
        // 陷阱1：function reducer(state, action) { return {...state}; } 因为每次返回的都是拷贝后的state（新对象），这里会判断为『已变化』
        // 陷阱2：function reducer(state, action) { state.nick = Math.random(); } 因为返回的一直是同一个对象，这里判断会是没有变化
        // 但实际上，如果是通过 combineReducer() 生成的reducer，每次获得的state，都是一个新的对象（key对应的值可能是旧的），因此
        // 1、combineReducer 场景：storeChanged 一直为true
        // 2、非combineReducer 场景：参考上面的陷阱1、陷阱2
        const storeChanged = nextState.storeState !== this.state.storeState;
        // props浅层比较，只比较一层
        // 潜在陷阱：如果 props[key] 是对象，那么，引用的比较可能相等，但是实际上值已经变化，比如下面的 info 对象，如果只是改变了info的某个key，实际上这里判断是没有变化
        // <ConnectedComponent info={info} />
        const propsChanged = !shallowEqual(nextProps, this.props);
        
        // store.getState() 变化，不一定组件最终的状态就会发生变化，需要看：
        // 1、mapStateToProps()、mapDispatchToProps() 返回的值 有没有发生变化
        // 2、这里用的是 shallow compare，只比较引用本身、引用的第一层key对应的值/引用
        let mapStateProducedChange = false;
        let dispatchPropsChanged = false;

        // 以下两种情况发生时，更新 stateProps
        // 1、store.getState() 发生变化
        // 2、store.getState() 没有发生变化，但是 props 发生变化，且 stateProps 需要根据 props 来计算
        // 其实就是 mapStateToProps(state[, props])
        if (storeChanged || (propsChanged && shouldUpdateStateProps)) {
          mapStateProducedChange = this.updateStateProps(nextProps);
        }

        // props 发生变化，且 dispatchProps 需要根据 props 计算出来时，更新 dispatchProps
        // 其实就是 mapDispatchToProps(dispatch[, props])
        if (propsChanged && shouldUpdateDispatchProps) {
          dispatchPropsChanged = this.updateDispatchProps(nextProps);
        }

        // 三种情况，任一满足，更新 state，并返回true(需要重新render)
        // 1、props 变化（最外层传入）
        // 2、stateProps 变化
        // 3、dispatchProps 变化
        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
          // 合并 props、stateProps、dispatchProps
          // 优先级：props < stateProps < dispatchProps（低优先级的会被覆盖）
          this.updateState(nextProps);
          return true;
        }

        return false;
      }

      constructor(props, context) {
        super(props, context);
        this.version = version;
        this.store = props.store || context.store;

        invariant(this.store,
          `Could not find "store" in either the context or ` +
          `props of "${this.constructor.displayName}". ` +
          `Either wrap the root component in a <Provider>, ` +
          `or explicitly pass "store" as a prop to "${this.constructor.displayName}".`
        );

        // 备忘：<ConnectedComponent nick="hello" /> 这里的props则为 {nick: 'hello'}
        this.stateProps = computeStateProps(this.store, props); // 通过 mapStateToProps(state[, ownProps])
        this.dispatchProps = computeDispatchProps(this.store, props); // mapDispatchToProps(dispatch[, ownProps])
        this.state = { storeState: null };
        this.updateState();
      }

      computeNextState(props = this.props) {
        return computeNextState(
          this.stateProps,
          this.dispatchProps,
          props
        );
      }

      updateStateProps(props = this.props) {
        const nextStateProps = computeStateProps(this.store, props);
        if (shallowEqual(nextStateProps, this.stateProps)) {
          return false;
        }

        this.stateProps = nextStateProps;
        return true;
      }

      updateDispatchProps(props = this.props) {
        const nextDispatchProps = computeDispatchProps(this.store, props);
        if (shallowEqual(nextDispatchProps, this.dispatchProps)) {
          return false;
        }

        this.dispatchProps = nextDispatchProps;
        return true;
      }

      updateState(props = this.props) {
        this.nextState = this.computeNextState(props);
      }

      isSubscribed() {
        return typeof this.unsubscribe === 'function';
      }

      trySubscribe() {
        if (shouldSubscribe && !this.unsubscribe) {
          this.unsubscribe = this.store.subscribe(::this.handleChange);
          this.handleChange();
        }
      }

      tryUnsubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      }

      componentDidMount() {
        this.trySubscribe();
      }

      componentWillUnmount() {
        this.tryUnsubscribe();
      }

      handleChange() {
        if (!this.unsubscribe) {
          return;
        }

        this.setState({
          storeState: this.store.getState()
        });
      }

      getWrappedInstance() {
        invariant(withRef,
          `To access the wrapped instance, you need to specify ` +
          `{ withRef: true } as the fourth argument of the connect() call.`
        );

        return this.refs.wrappedInstance;
      }

      render() {
        const ref = withRef ? 'wrappedInstance' : null;
        return (
          <WrappedComponent {...this.nextState} ref={ref} />
        );
      }
    }

    Connect.displayName = `Connect(${getDisplayName(WrappedComponent)})`;
    Connect.WrappedComponent = WrappedComponent;
    Connect.contextTypes = {
      store: storeShape
    };
    Connect.propTypes = {
      store: storeShape
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

    return hoistStatics(Connect, WrappedComponent);
  };
}
