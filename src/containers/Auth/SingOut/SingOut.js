import React from 'react';
import { Redirect } from 'react-router-dom';
import { RoutePaths } from '../../../common/ClientRoutes';

class SingOut extends React.Component {
  componentDidMount() {
    this.props.onSingOut();
  }

  render() {
    return <Redirect exact to={RoutePaths.TO_HOME()} />;
  }
}

export default SingOut;
