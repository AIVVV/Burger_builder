import React from 'react';
import BuildControl from '../../common/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = props => {
  return (
    <div className="BurgerBuildControls">
      {controls.map(ctrl => {
        return <BuildControl key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
};

export default buildControls;
