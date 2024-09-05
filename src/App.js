import "./App.css";
import SearchBar from "./components/SearchBar.js";
import Header from "./components/Header.js";
import useState from "react";
import RecipesList from "./components/RecipeList.js";
import React from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  return (
    <div className="App">
      <Header />
      <SearchBar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
