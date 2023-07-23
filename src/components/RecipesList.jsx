import { useEffect } from "react";
import { useBeerStore } from "../App";
import { RecipeCard } from "./RecipeCard";
import { ModalWindow } from "./ModalWindow";

export const RecipeList = () => {
  const recipes = useBeerStore((state) => state.recipes);
  const selectedRecipes = useBeerStore((state) => state.selectedRecipes);
  const loadRecipes = useBeerStore((state) => state.loadRecipes);
  const selectRecipe = useBeerStore((state) => state.selectRecipe);
  const deleteSelectedRecipes = useBeerStore((state) => state.deleteSelectedRecipes);
  const currentPage = useBeerStore((state) => state.currentPage);
  const isModalOpen = useBeerStore((state) => state.isModalOpen);

  useEffect(() => {
    loadRecipes(currentPage);
  }, [loadRecipes, currentPage]);

  const handleRecipeClick = (recipeId) => {
    selectRecipe(recipeId);
  };

  const handleDeleteClick = () => {
    deleteSelectedRecipes();
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      useBeerStore.setState({ currentPage: currentPage - 1 });
    }
  };

  const handleNextPage = () => {
    useBeerStore.setState({ currentPage: currentPage + 1 });
  };

  return (
    <div className="list">
      <div className="cards">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            selected={selectedRecipes.includes(recipe.id)}
            onClick={handleRecipeClick}
          />
        ))}
      </div>

      <div className="buttons">
        <div className="pagination">
          <button className="orange btn" onClick={handlePrevPage}>Previous</button>
          <button className="orange btn" onClick={handleNextPage}>Next</button>
        </div>

        {selectedRecipes.length > 0 && (
          <button className="btn red delete" onClick={handleDeleteClick}>Delete</button>
        )}
      </div>

      {isModalOpen && (
        <ModalWindow />
      )}
    </div>
  );
};