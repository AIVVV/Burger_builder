import SingIn from './SingIn';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    onSingIn: (email, password) => dispatch(actions.singIn(email, password))
  }
};

export default connect(null, mapDispatchToProps)(SingIn);