import useFetch from "../../hooks/useFetch"

import "./Home.css"

import RecipeList from "../../components/RecipeList";

const Home = () => {
  const { data: recipes, isPending, error} = useFetch("http://localhost:3000/recipes");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading recipes....</p>}
      {recipes && <RecipeList recipes={recipes}/>}
    </div>
  )
}

export default Home