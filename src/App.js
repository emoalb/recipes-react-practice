
import './App.css';
import Recipe from "./Recipe"
import {useEffect,useRef,useState} from 'react';

const App = () => {

  const APP_ID = '998d3865';
  const APP_KEY = '3b3cf17260c6f7537b84dd8dc3a786cb';
  const inputContainer = useRef(null);
  const [queryString,setQueryString] = useState("chocolate")
  const [recipes,setRecipes] = useState([]);


  useEffect(()=>{
  getRecipies(queryString)
  },[queryString])
  const getRecipies = async (recipie) => {
  let request_string =  `https://api.edamam.com/api/recipes/v2?type=public&q=${recipie}&app_id=${APP_ID}&app_key=${APP_KEY}`
  const response = await fetch(request_string);
  const data  = await response.json();
  setRecipes(data.hits);
  console.log(data);

}


const searchFunction = (event)=>{
  event.preventDefault();
  setQueryString(inputContainer.current.value);
}


  return (
    <div className="App">
      <form method="POST" onSubmit={searchFunction} className="search-form">
        <input ref={inputContainer} className="search-bar" type="text"/>
        <button className="search-button" type = "submit">Search</button>
      </form>
      <div className="recipes">
      {
      recipes.map((recipe,index)=>
      (<Recipe key={index} title= {recipe.recipe.label}
      calories = {recipe.recipe.calories} image = {recipe.recipe.image} ingredients = {recipe.recipe.ingredients}/>))
      }
      </div>
    </div>
  );
}

export default App;
