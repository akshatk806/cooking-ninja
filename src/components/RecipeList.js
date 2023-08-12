import { Link } from 'react-router-dom'

import "./RecipeList.css"

const RecipeList = (props) => {

  if(props.recipes.length === 0) {
    return <div className='error'>No Recipes to Cook...</div>
  }

  return (
    <div className="recipe-list">
        {props.recipes.map((recipe) => (
            <div key={recipe.id} className="card">
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>CooK This</Link>
            </div>
        ))}
    </div>
  )
}

export default RecipeList