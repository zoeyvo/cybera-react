// ArchiveRecipes.jsx
import React from "react";

function ArchiveRecipes() {
  const recipe = {
    name: "Midnight Ramen",
    type: "Quick & Easy",
    ingredients: [
      "1 package instant ramen",
      "1 egg",
      "Green onions",
      "Sriracha",
      "Sesame oil"
    ],
    instructions: [
      "Boil water and cook ramen according to package",
      "Crack egg into boiling water during last minute",
      "Drain, add seasonings and toppings",
      "Perfect for late coding sessions"
    ]
  };

  return (
    <div className="grid-cell cell1">
      <div className="bio-content">
        <span className="bio-title">~/archive/recipes</span>
        <span className="gothic-text bio-desc">
          Cooking experiments and go-to recipes
        </span>

        <div className="archive-item">
          <div className="recipe-header">
            <h3 className="recipe-name">{recipe.name}</h3>
            <span className="recipe-type">[{recipe.type}]</span>
          </div>
          
          <div className="recipe-content">
            <div className="recipe-section">
              <strong>Ingredients:</strong>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div className="recipe-section">
              <strong>Instructions:</strong>
              <ol>
                {recipe.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveRecipes;
