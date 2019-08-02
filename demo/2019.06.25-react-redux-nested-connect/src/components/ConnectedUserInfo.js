import UserInfo from './UserInfo';
import { connect } from 'react-redux';
import { fetchUserInfo } from '../actions/userInfo';

function mapStateToProps(state) {
    let { nick } = state.userInfo;
    return {
        nick: nick
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUserInfo: () => {
            console.log(`[ConnectedUserInfo] fetchUserInfo is called.`);
            dispatch(fetchUserInfo());
        }
    }
}

// function mergeProps(stateProps, dispatchProps, ownProps) {
//     // console.log('[ConnectedUserInfo] mergeProps is called.');
//     return {
//        ...ownProps,
//        ...stateProps,
//        ...dispatchProps
//     };
// }

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);