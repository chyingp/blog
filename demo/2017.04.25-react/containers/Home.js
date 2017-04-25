import React from 'react';
import { queryHelp } from '../actions';
import { connect } from 'react-redux';

class Home extends React.Component {
	
	constructor (props) {
		super(props);	
		this.state = {
			value: ''
		};
	}

	componentDidMount () {
		// console.log( store.getState() );
		// store.dispatch( queryHelp() );
		this.props.getHelp();
	}

	getFilteredItems () {		
		return this.props.items.filter( item => {
			return item.title.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1;
		});
	}

	render () {
		return (
			<div>
				<div>
					<label htmlFor="">内容过滤：</label>
					<input 
						type="text" 
						value={this.state.value} 
						onChange={(evt) => this.setState({value: evt.target.value})} 
					/>
				</div>	
				<div>
					<ul>
						{this.getFilteredItems().map((item, index) => <li key={index}>{item.title}</li> )}
					</ul>					
				</div>			
			</div>	
		);
	}
}

let mapStateToProps = (state) => {
	return {
		items: state.items
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		getHelp: () => dispatch( queryHelp() )
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
