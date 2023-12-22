import React, { useState, useEffect } from "react";
import History from "../pcomponent/history";
import RecipesBox from "../pcomponent/recipesBox";
import "./recipes.css";
const Recipes = () => {
  const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [history, setHistory] = useState(() => {
    const savedHistory = sessionStorage.getItem("history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  // search for the recipe
  const searchRecipes = async () => {
    try {
      const url = api + query;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
    } catch (e) {}
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("history", JSON.stringify(history));
  }, [history]);
  const addHistory = () => {
    if (query.trim() !== "" && !history.includes(query)) {
      setHistory([...history, query]);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
    addHistory();
  };
  return (
    <>
      <History
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        history={history}
      />
      <div className="recipes-container">
        {recipes
          ? recipes.map((recipe) => (
              <RecipesBox key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Results."}
      </div>
    </>
  );
};
export default Recipes;
