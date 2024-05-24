import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.instructions}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
    </div>
  );
};

export default RecipeDetails;