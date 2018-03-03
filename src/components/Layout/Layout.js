import React from 'react';
import Wrapper from '../../common/Wrapper';

const layout = props => {
  return (
    <Wrapper>
      <div> Toolbar, SideDrawer, backdrop</div>
      <main className="Content">{props.children}</main>
    </Wrapper>
  );
};

export default layout;
