import React, { useState } from "react";
import './index.css';

function RegisterForm() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationTime, setPreparationTime] = useState(0);
  const [chefName, setChefName] = useState("");
  const [cookingDate, setCookingDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      recipeName,
      ingredients,
      preparationTime,
      chefName,
      cookingDate,
    });
  };

  return (
    <div>
      <h2>Recipe Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="bg-blue-500 bg-opacity-75 p-4 rounded">
          <label>Recipe Name</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <label>Ingredients</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <label>Preparation Time (minutes)</label>
          <input
            type="number"
            value={preparationTime}
            onChange={(e) => setPreparationTime(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <label>Chef Name</label>
          <input
            type="text"
            value={chefName}
            onChange={(e) => setChefName(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <label>Cooking Date</label>
          <input
            type="date"
            value={cookingDate}
            onChange={(e) => setCookingDate(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2"
          />
          <button
            type="submit"
            className="border-blue-500 sm:border-double border-4 border-gray-600 bg-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
