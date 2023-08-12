import { useParams } from "react-router-dom"
// import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react"
import useTheme from '../../hooks/useTheme'
import { projectFirestore } from "../../firebase/config"
import "./Recipe.css"

const Recipe = () => {
  const { id } = useParams();

  // const url = "http://localhost:3000/recipes/" + params.id;
  // const { data: recipe, isPending, error } = useFetch(url);

  const { mode } = useTheme()

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetching the data
    setIsPending(true);

    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if(doc.exists) {
        setIsPending(false);
        setRecipe(doc.data());
      }
      else {
        setIsPending(false);
        setError("Could not find that recipe");
      }
    })
  }, [id])
  

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>} 
      {isPending && <p className="loading">Loading....</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe