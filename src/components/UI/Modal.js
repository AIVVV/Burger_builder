import React from 'react';
import Wrapper from '../../common/Wrapper';
import Backdrop from '../../components/UI/Backdrop';

const modal = props => {
  return (
    <Wrapper>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default modal;
