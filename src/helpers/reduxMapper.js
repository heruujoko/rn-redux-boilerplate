import { bindActionCreators } from 'redux'
import * as authActions from '../actions/authActions'
import * as appActions from '../actions/appActions'

export function mapStateToProps(state) {
  return {
    session: state.session,
    app: state.app
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, authActions, appActions), dispatch)
  }
}