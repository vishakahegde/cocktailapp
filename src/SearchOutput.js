import React, { useState, useEffect } from "react";
import "./App.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SearchOutput() {
  const [drinks, setDrinks] = useState([]);
  const { keyword } = useParams();

  useEffect(() => {
    const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;

    async function fetchData() {
      const response = await axios.get(apiURL);
      setDrinks(response.data.drinks || []);
      console.log(response);
    }
    fetchData();
  }, [keyword]);

  return (
    <div>
      <ul>
        {drinks.map((drink) => (
          <li>{drink.strDrink}</li>
        ))}
      </ul>
    </div>
  );
}
