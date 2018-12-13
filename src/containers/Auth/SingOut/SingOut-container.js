import { connect } from 'react-redux';
import SingOut from './SingOut';
import { withRouter } from 'react-router-dom';

import { actionHelpersAuth } from '../actionsHelpers';

const mapDispatchToProps = dispatch => {
  return {
    onSingOut: () => dispatch(actionHelpersAuth.singOut()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SingOut),
);
