import { connect } from 'react-redux'
import { reg } from '../actions'
import Reg from '../components/Reg'

const mapStateToProps = (state) => ({
	...state.code,
	categories: state.categories
})

const mapDispatchToProps =  ({
	reg: reg
})

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Reg)