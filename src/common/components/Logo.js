import React from 'react';
import logoSrc from '../../assets/burger-logo.png';

const logo = props => (
  <div
    className="Logo"
    style={{ height: props.height, marginBottom: props.marginBottom }}
  >
    <img src={logoSrc} alt={props.alt}/>
  </div>
);

export default logo;
