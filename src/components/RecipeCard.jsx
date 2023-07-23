import { useBeerStore } from '../App.js';

export const RecipeCard = ({ recipe, selected, onClick}) => {
  const openModal = useBeerStore(state => state.openModal);
  const selectRecipe = useBeerStore(state => state.selectRecipe);

  const handleCardClick = () => {
    openModal(recipe);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    selectRecipe(recipe.id);
  };

  return (
    <div 
      className={selected ? 'card--selected' : 'card'} 
      onClick={handleCardClick}
      onContextMenu={handleContextMenu}
    >
      <img 
        className="card__image" 
        src={recipe.image_url} 
        alt={recipe.name} 
      />
      <h2 className="card__title">{recipe.name}</h2>
    </div>
  );
};