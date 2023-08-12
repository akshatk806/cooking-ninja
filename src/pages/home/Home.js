// import useFetch from "../../hooks/useFetch"
import { projectFirestore } from "../../firebase/config";
import { useEffect, useState } from "react";

import "./Home.css"

import RecipeList from "../../components/RecipeList";

const Home = () => {
  // const { data: recipes, isPending, error} = useFetch("http://localhost:3000/recipes");

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {    // onSnapshot is for real time
      // console.log(snapshot)
      if(snapshot.empty) {
        setError("No recipes to load");
        setIsPending(false);
      }
      else {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results);
        setIsPending(false);
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })    // asynchronous means this take some time to complete

    // cleanup function-> remove subscription
    return () => unsub()
  }, [])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading recipes....</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Home