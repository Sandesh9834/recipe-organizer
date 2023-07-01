import React, { useState } from "react";
import { RecipeCards } from "../components/RecipeCards";
import { recipes } from "../data/data";

export default function RecipePage() {
  const [filterText, setFilterText] = useState("");
  const [filterOption, setFilterOption] = useState("name");

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleFilterOptionChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const filterField = recipe[filterOption].toLowerCase();
    const searchText = filterText.toLowerCase();
    return filterField.includes(searchText);
  });

  return (
    <>
      <div>
        <input
          type="text"
          value={filterText}
          onChange={handleFilterTextChange}
        />
        <input
          type="radio"
          value="name"
          checked={filterOption === "name"}
          onChange={handleFilterOptionChange}
        />
        <label>Name</label>
        <input
          type="radio"
          value="cuisine"
          checked={filterOption === "cuisine"}
          onChange={handleFilterOptionChange}
        />
        <label>Cuisine</label>
      </div>
      <h2>All Recipes</h2>
      <div className="container">
        {filteredRecipes.map((recipe) => (
          <RecipeCards key={recipe.id} {...recipe} noDetail />
        ))}
      </div>
    </>
  );
}
