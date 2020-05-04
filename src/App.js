import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Cocktails</Link>
          <Link to="/movies">Cocktail Images</Link>
        </nav>
        <header className="App-header"></header>
      </div>
    </Router>
  );
}

export default App;
