import React from 'react';
import Logo from '../../common/components/Logo';
import Navigation from '../Navigation/Navigation';
import Backdrop from '../UI/Backdrops/Backdrop';
import Wrapper from '../../common/hoc/Wrapper';

const sideDrawer = props => {
  let attachedClasses = ['Sidedrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['Sidedrawer', 'Open'];
  }

  return (
    <Wrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <Logo height="11%" marginBottom="30px" alt="Side drawer logo image" />
        <nav>
          <Navigation class="MobileOnly" isAuthenticated={props.isAuth}/>
        </nav>
      </div>
    </Wrapper>
  );
};

export default sideDrawer;
