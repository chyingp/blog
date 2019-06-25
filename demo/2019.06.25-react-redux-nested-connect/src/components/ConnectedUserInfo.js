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
            dispatch(fetchUserInfo());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);