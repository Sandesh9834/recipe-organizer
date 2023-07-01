import React from "react";
import { Link, useParams } from "react-router-dom";
import { recipes } from '../data/data';
import { RecipeCards } from "../components/RecipeCards";

export default function RecipeDetails() {
  const { recipeId } = useParams();

  function getProductDetails(products, recipeId) {
    return products.find((product) => product.id === recipeId);
  }

  const product = getProductDetails(recipes, recipeId);
  console.log("typeof recipeId", typeof(recipeId))

  return (
    <>
      <RecipeCards {...product} />
      <Link to="/"> See All </Link>
    </>
  );
}
