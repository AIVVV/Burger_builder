import { connect } from 'react-redux';
import SingOut from './SingOut';
import { withRouter } from 'react-router-dom';

import * as actions from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onSingOut: () => dispatch(actions.helpers.singOut())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SingOut));
