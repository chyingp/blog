import { connect } from 'react-redux';
import App from './App';
import { queryItemsAsync } from './actions';


const mapStateToProps = (state) => {
	return {
		messages: state.items
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMessages: function (items) {
			dispatch( queryItemsAsync(items) );
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);