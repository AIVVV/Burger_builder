import React from "react";

import Wrapper from "../../../common/hoc/Wrapper";
import Backdrop from "../Backdrops/Backdrop";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Wrapper>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Wrapper>
    );
  }
}

export default Modal;
