import { connect } from 'react-redux'
import * as Actions from '../actions/login'
import Login from '../components/Login'

const mapStateToProps = state => state

const mapDispatchToProps = Actions

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Login)