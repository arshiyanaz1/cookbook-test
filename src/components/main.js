import React, { useEffect, useState } from 'react';
import '../App.css';
import recipes from './Api';
import SingleRecipe from './SingleRecipe';

function Main() {
  const [new_recipe, updatenewRecipe] = useState([recipes[0]]);
  const [clickcheck, updateClickcheck] = useState(0);

  const updateId = (e, ind) => {
    if (e) {
      updatenewRecipe([e]);
      updateClickcheck(ind);
    }
  };

  useEffect(() => {
    updateId();
  }, []);
  return (
    <div className='App'>
      <div className='container-fluid'>
        <header className='App-header'>
          <h1 className='App-title'>Recipe Book</h1>
        </header>
        <div className='row main'>
          <div className='col-md-4 col-sm-12 left'>
            <h4 className='recipe_h'>Recipes</h4>
            {recipes.map((recipe, index) => (
              <h5
                className={
                  clickcheck == index ? 'activerecpe' : 'inactiverecipe'
                }
                key={index}
                onClick={() => updateId(recipe, index)}
              >
                <p className='recipe_list'>{recipe.recipe.label}</p>
              </h5>
            ))}
          </div>
          <SingleRecipe new_recipe={new_recipe} />
        </div>
      </div>
    </div>
  );
}

export default Main;
