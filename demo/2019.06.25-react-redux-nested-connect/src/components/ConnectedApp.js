import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    let { nick } = state.userInfo;
    return {
        nick: nick
    };
}

// function mergeProps(stateProps, dispatchProps, ownProps) {
//     // console.log('[ConnectedApp] mergeProps is called.');
//     return {
//        ...ownProps,
//        ...stateProps,
//        ...dispatchProps
//     };
// }

export default connect(mapStateToProps)(App);