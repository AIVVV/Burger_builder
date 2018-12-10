import { connect } from 'react-redux';
import SingUp from './SingUp';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSingUp: (email, password) => dispatch(actions.singUp(email, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);
