import React from 'react';

const backdrop = props => {
  return props.show ? <div className="Backdrop" onClick={props.clicked} /> : null;
};

export default backdrop;
