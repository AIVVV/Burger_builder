import SingUp from './SingUp';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    onSingUp: (email, password) => dispatch(actions.singUp(email, password))
  }
};

export default connect(null, mapDispatchToProps)(SingUp);
