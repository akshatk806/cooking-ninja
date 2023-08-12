import { Link } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import "./RecipeList.css"

const RecipeList = (props) => {
  const { mode } = useTheme()

  if(props.recipes.length === 0) {
    return <div className='error'>No Recipes to Cook...</div>
  }

  return (
    <div className="recipe-list">
        {props.recipes.map((recipe) => (
            <div key={recipe.id} className={`card ${mode}`}>
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