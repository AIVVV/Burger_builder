import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppRouter from './AppRouter';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.registered,
  };
};

export default withRouter(connect(mapStateToProps)(AppRouter));
