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
    <div className="bg-white p-4 rounded-lg shadow-md"> {}
      <h2 style={{ color: 'red' }}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-4 rounded-lg shadow-md"> {}
          <label>Recipe Name</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2 rounded-lg" 
          />
          <label>Ingredients</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2 rounded-lg" 
          />
          <label>Preparation Time (minutes)</label>
          <input
            type="number"
            value={preparationTime}
            onChange={(e) => setPreparationTime(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2 rounded-lg" 
          />
          <label>Chef Name</label>
          <input
            type="text"
            value={chefName}
            onChange={(e) => setChefName(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2 rounded-lg" 
          />
          <label>Cooking Date</label>
          <input
            type="date"
            value={cookingDate}
            onChange={(e) => setCookingDate(e.target.value)}
            className="border-solid border-4 border-gray-600 w-full mb-2 rounded-lg" 
          />
          <button
            type="submit"
            className="border-red-500 sm:border-double border-4 border-gray-600 bg-black p-2 rounded text-red-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
