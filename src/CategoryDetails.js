import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams } from "react-router-dom";

export default function CategoryDetails() {
  const [drinks, setDrinks] = useState([]);
  const params = useParams();

  useEffect(() => {
    // const category = "Cocktail";
    const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.category}`;

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setDrinks(data.drinks);
      });
  }, []);

  return (
    <div>
      <h1>Drinks for Category:</h1>
      <ul>
        {drinks.map((drink) => (
          <li key={drink.strDrink}>
            <h3>{drink.strDrink}</h3>
            <div>
              <img
                src={drink.strDrinkThumb}
                height="100"
                alt="Drink Imgae"
              ></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
//
