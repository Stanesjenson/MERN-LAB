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
    <div className="p-4 bg-white rounded-lg shadow-md"> {}
      <h2 style={{ color: 'red' }}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-4 rounded-lg shadow-md"> {}
          <label>Recipe Name</label>
          <input
            type="text"
            value={recipeName} required
            onChange={(e) => setRecipeName(e.target.value)}
            className="w-full mb-2 border-4 border-gray-600 border-solid rounded-lg" 
          />
          <label>Ingredients</label>
          <input
            type="text"
            value={ingredients} required
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full mb-2 border-4 border-gray-600 border-solid rounded-lg" 
          />
          <label>Preparation Time (minutes)</label>
          <input
            type="number"
            value={preparationTime} required
            onChange={(e) => setPreparationTime(e.target.value)}
            className="w-full mb-2 border-4 border-gray-600 border-solid rounded-lg" 
          />
          <label>Chef Name</label>
          <input
            type="text"
            value={chefName}
            onChange={(e) => setChefName(e.target.value)}
            className="w-full mb-2 border-4 border-gray-600 border-solid rounded-lg" 
          />
          <label>Cooking Date</label>
          <input
            type="date"
            value={cookingDate}
            onChange={(e) => setCookingDate(e.target.value)}
            className="w-full mb-2 border-4 border-gray-600 border-solid rounded-lg" 
          />
          <button
            type="submit"
            className="p-2 text-red-500 bg-black border-4 border-red-500 rounded sm:border-double"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
