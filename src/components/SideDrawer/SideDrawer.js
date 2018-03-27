import React from 'react';
import Logo from '../../common/Logo';
import Navigation from '../Navigation/Navigation';
import Backdrop from '../UI/Backdrop';
import Wrapper from '../../common/Wrapper';

const sideDrawer = props => {
  let attachedClasses = ['Sidedrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['Sidedrawer', 'Open'];
  }
  return (
    <Wrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo height="11%" marginBottom="30px" />
        <nav>
          <Navigation />
        </nav>
      </div>
    </Wrapper>
  );
};

export default sideDrawer;
