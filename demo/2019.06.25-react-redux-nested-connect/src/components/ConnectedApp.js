import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    let { nick } = state.userInfo;
    return {
        nick: nick
    };
}

export default connect(mapStateToProps)(App);