import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => {
        const categories = data.drinks.map((cat) => {
          return cat["strCategory"];
        });
        console.log("Drink Types", categories);
        setCategories(categories);
      });
  }, []);

  return (
    <ul>
      {categories.map((name) => (
        <li key={name}>
          <Link to={`/category/${encodeURIComponent(name)}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
