import React from 'react'
import { useBeerStore } from '../App';

export const ModalWindow = () => {
  const currentBeer = useBeerStore((state) => state.currentBeer);
  const closeModal = useBeerStore((state) => state.closeModal);

  console.log(currentBeer)

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>Close</button>
        <div className='main-info'>

          <div>
            <div className='upper-block'>
              <div>
                <img className='modal--image' src={currentBeer.image_url} alt={currentBeer.name} />
              </div>

              <div>
                <h2>{currentBeer.name}</h2>
                <p>{currentBeer.tagline}</p>
                <p>{currentBeer.first_brewed}</p>
                <p>{currentBeer.description}</p>
              </div>
            </div>

            <p>ABV: {currentBeer.abv}% | IBU: {currentBeer.ibu}</p>
            <p>Volume: {currentBeer.volume.value} {currentBeer.volume.unit}</p>

            <hr />

            <div>
              <h3>Ingredients:</h3>

              <div className='ingredients'>
                <div className='malt'>
                  <p style={{ fontSize: '18px' }}>Malt:</p>
                  {currentBeer.ingredients.malt.map((obj) => (
                    <p>{obj.name}: {obj.amount.value} {obj.amount.unit}</p>
                  ))}
                </div>

                <div className='hops'>
                  <p style={{ fontSize: '18px' }}>Hops:</p>
                  {currentBeer.ingredients.hops.map((obj) => (
                    <p>{obj.name}: {obj.amount.value} {obj.amount.unit} - {obj.add} ({obj.attribute})</p>
                  ))}
                </div>
              </div>
            </div>

            <hr />

            <h3>Food Pairing:</h3>
            
            <div className='food-pairing'>
                  {currentBeer.food_pairing.map((food) => (
                    <p>{food}</p>
                  ))}
                </div>

            <hr />

            <p>Tip: {currentBeer.brewers_tips}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
