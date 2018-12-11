import { connect } from 'react-redux';
import SingIn from './SingIn';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.registered,
    building: state.burger.building
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSingIn: (email, password) => dispatch(actions.singIn(email, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);