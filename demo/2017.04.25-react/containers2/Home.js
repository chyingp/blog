import React from 'react';
import { queryHelp } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
						{this.getFilteredItems().slice(0, 1).map((item, index) => {
                            // return <li key={index}><a href={`/detail/${index}`}>{item.title}</a></li>
                            // {`/detail/:${index}`}
                            return <li key={index}><Link to="/fuck">{item.title}</Link></li>
                         } )}
					</ul>					
				</div>			
			</div>	
		);
	}
}

let mapStateToProps = (state, ownProps) => {
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
