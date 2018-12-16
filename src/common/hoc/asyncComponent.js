import React, { Component } from "react";

export const asyncComponent = importComponent => {
  return class AsyncComponent extends Component {
    static Component = null;
    constructor(props) {
      super(props);
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount() {
      if (!this.state.Component) {
        importComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };
};
