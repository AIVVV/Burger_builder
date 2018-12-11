import React from 'react';
import BuildControl from '../../common/components/BuildControl';

// object with all ingredients that burger have
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = props => {
  return (
    <div className="BurgerBuildControls">
      <p className="price-container">
        Current price is <strong>{props.price}</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.addIngridient(ctrl.type)}
            removed={() => props.removeIngredient(ctrl.type)}
            displayed={props.displayed[ctrl.type]}
          />
        );
      })}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        {props.isAuth ? "ORDER NOW" : "SING IN TO ORDER"}
      </button>
    </div>
  );
};

export default buildControls;
