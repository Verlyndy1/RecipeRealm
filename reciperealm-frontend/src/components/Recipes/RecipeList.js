import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import RecipeForm from './RecipeForm';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const data = await api.getRecipes();
      setRecipes(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <RecipeForm fetchRecipes={fetchRecipes} />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.instructions}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;