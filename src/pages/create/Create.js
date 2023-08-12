// importing styles
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'
import { projectFirestore } from "../../firebase/config";

import './Create.css'

const Create = () => {
  // 3 state variables which I ask from user to enter in form
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  // state for adding the ingredients
  const [newIngredients, setNewIngredients] = useState('');    // input in form
  const [ingredients, setIngredients] = useState([]);          // display the total ingredients added beneath the text field

  // using this ref to get handler that DOM element and we use focus method to focus on input field 
  const ingredientInput = useRef(null);

  const history = useHistory();
  
  // const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = async (e) => {
    e.preventDefault();

    // instead of logging we have to make POST request to add the input date to the json
    // console.log(title, method, cookingTime, ingredients);

    const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes'}

    try {
      await projectFirestore.collection('recipes').add(doc);
      history.push('/');    // redirecting
    }
    catch(err) {
      console.error(err);
    }
  }

  const handleIngredientsAdd = e => {
    e.preventDefault();
    const ing = newIngredients.trim()     // trim out space
 
    if(ing && !ingredients.includes(ing)) {       // ingredient is an array thats why we use includes
      setIngredients(prevIngredients => [...prevIngredients, ing])    // returning a array
    }
    setNewIngredients('');
    ingredientInput.current.focus()
  }

  /*
  // redirect the user when we get data response
  useEffect(()=>{
    if(data) {
      history.push('/');
    }
  }, [data, history])
  */

  const { color, mode } = useTheme()

  return (
    <div className={`create ${mode}`}>
        <h2 className='page-title'>Add a New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe Title:</span>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} required/>
          </label>

          {/* ingredients go here */}
          <label>
            <span>Recipe Ingredients:</span>
            <div className="ingredients">
              <input type="text" onChange={e => setNewIngredients(e.target.value)} value={newIngredients} ref={ingredientInput}/>
              <button onClick = {handleIngredientsAdd} className='btn' style={{background:color}}>add</button>
            </div>
          </label>
          <p>Current Ingredients:{ingredients && ingredients.map(i => <em key={i}>{i}, </em>)}</p>

          <label>
            <span>Recipe Method:</span>
            <textarea onChange={e=>setMethod(e.target.value)} value={method} required/>
          </label>

          <label>
            <span>Cooking Time (minutes):</span>
            <input type="number" onChange={e=>setCookingTime(e.target.value)} value={cookingTime} required/>
          </label>

          <button className="btn" style={{background:color}}>submit</button>
        </form>
    </div>
  )
}

export default Create