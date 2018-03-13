import React from 'react';
import BurgerIngredient from './BurgerIngredient';

const burger = props => {
  const getIngredients = () => {
    let transformIngredients = Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

    if (transformIngredients.length === 0) {
      transformIngredients = <p> Plese start adding ingredients! </p>;
    }

    return transformIngredients;
  };

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {getIngredients()}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
