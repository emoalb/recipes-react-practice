
import './App.css';
import {useEffect,useState} from 'react';

const App = () => {

  const APP_ID = '998d3865';
  const APP_KEY = '3b3cf17260c6f7537b84dd8dc3a786cb';
  useEffect(()=>{
  getRecipies("chocolate")
  },[])
  const getRecipies = async (recipie) => {
  let request_string =  `https://api.edamam.com/api/recipes/v2?type=public&q=${recipie}&app_id=${APP_ID}&app_key=${APP_KEY}`
  const response = await fetch(request_string);
  const data  = await response.json();
  console.log(data);
}
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type = "button">Search</button>
      </form>
    </div>
  );
}

export default App;
