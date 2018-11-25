import React from "react";

const order = props => {
  const ingredientsArray = [];

  for (let ingredientName in props.ingredients) {
    ingredientsArray.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  return (
    <div className="Order">
      <p>
        Ingredients:
        {ingredientsArray.map(ing => {
          return (
            <span className="Ingredients" key={ing.name}>
              {ing.name} ({ing.amount})
            </span>
          );
        })}
      </p>
      <p>
        Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
