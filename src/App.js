import { useEffect } from 'react';
import './App.css';
import { create } from 'zustand';
import axios from 'axios';
import { RecipeList } from './components/RecipesList';

export const useBeerStore = create((set) => ({
  recipes: [],
  selectedRecipes: [],
  currentPage: 1,
  currentBeer: null,
  isModalOpen: false,
  openModal: (beer) => {
    set({ currentBeer: beer, isModalOpen: true });
  },
  closeModal: () => {
    set({ currentBeer: null, isModalOpen: false });
  },
  loadRecipes: async (page) => {
    try {
      const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}`);
      const recipes = response.data;
      set({ recipes, currentPage: page });
    } catch (error) {
      throw new Error('Failed fetch', error.message)
    }
  },
  selectRecipe: (recipeId) => {
    set((state) => ({
      selectedRecipes: state.selectedRecipes.includes(recipeId)
        ? state.selectedRecipes.filter((id) => id !== recipeId)
        : [...state.selectedRecipes, recipeId],
    }));
  },
  deleteSelectedRecipes: () => {
    set((state) => {
      const filteredRecipes = state.recipes.filter(
        (recipe) => !state.selectedRecipes.includes(recipe.id)
      );

      return {
        ...state,
        recipes: filteredRecipes,
        selectedRecipes: [],
      };
    });
  },
}));

const App = () => {
  const loadRecipes = useBeerStore((state) => state.loadRecipes);

  useEffect(() => {
    loadRecipes();
  }, [loadRecipes]);

  return (
    <div>
      <header className='header'>
        <h1 className='title'>
          Welcome to our beer recipe website!
        </h1>

        <p className='info'>
          Here you will find a huge selection of various recipes created to satisfy your beer appetite. Regardless of your taste and preferences, we have recipes for everyone.
        </p>
      </header>
      <RecipeList />
    </div>
  );
}

export default App;
