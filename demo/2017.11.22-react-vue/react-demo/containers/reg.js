import { connect } from 'react-redux'
import * as Actions from '../actions/reg'
import Reg from '../components/Reg'

const mapStateToProps = state => state

const mapDispatchToProps = Actions

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Reg)