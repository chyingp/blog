import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class HelpDetail extends React.Component {
    
    constructor (props) {
        super(props);
    }

    render () {
        return <div>detail</div>
    }
}

HelpDetail.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired
};

let mapStateToProps = (state, ownProps) => {
	return {
        id: state.curId,
		..._.find(state.items, item => item.id === state.curId)
	};
};

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		getHelp: () => dispatch( queryHelp() )
// 	};
// };

export default connect(mapStateToProps)(HelpDetail);

// export default HelpDetail;