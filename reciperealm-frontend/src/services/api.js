import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

const getRecipes = async () => {
  const response = await axios.get(`${API_URL}/recipes`);
  return response.data;
};

const createRecipe = async (recipeData, token) => {
  const response = await axios.post(`${API_URL}/recipes`, recipeData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const api = {
  register,
  login,
  getRecipes,
  createRecipe,
};

export default api;
