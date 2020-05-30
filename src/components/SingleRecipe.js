import React from 'react';

const SingleRecipe = ({ new_recipe }) => {
  return (
    <div className='col-md-9 col-sm-12 right'>
      <div className='right-inner'>
        {new_recipe && (
          <div className='outer_right'>
            {new_recipe.map((recipe, index) => (
              <div key={index}>
                <h2 className='heading'>{recipe.recipe.label}</h2>
                <div className='row'>
                  <div className='col-md-4 col-sm-12 recipe_container'>
                    <div className='recipe-img'>
                      <img alt='Food' src={recipe.recipe.image} />
                    </div>
                    <h5 className='desc'>{recipe.recipe.description}</h5>
                  </div>
                  <div className='col-md-8 col-sm-12'>
                    <h5>Ingredients:</h5>
                    <ul className='ingredients'>
                      {recipe.recipe.ingredients.map((ingre, index) => (
                        <li key={index}>{ingre.text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className='ingredients'>By: {recipe.recipe.source}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleRecipe;
