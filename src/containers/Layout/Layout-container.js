import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import Layout from './Layout';

const mapStateToProps = state => {
  return {
    isAuthenticate: state.auth.registered
  };
};

export default withRouter(connect(mapStateToProps)(Layout));
