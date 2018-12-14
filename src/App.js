import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Layout } from './exports/components-exports';
import { AppRouter } from './exports/components-exports';
import * as actionsAuth from './containers/Auth/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSingin();
  }

  render() {
    return (
      <Layout>
        <AppRouter />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSingin: () => dispatch(actionsAuth.authCheckState())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App),
);
