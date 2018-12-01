 import React from 'react';

const button = props => {
  return (
    <button
      className={['Button', props.btnType].join(' ')}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
