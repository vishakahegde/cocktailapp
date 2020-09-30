import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CategoryDetails from "./CategoryDetails";
import SearchOutput from "./SearchOutput";
import NotFound from "./NotFound";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Nav />

      <main>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:category" component={CategoryDetails} />
          <Route path="/search/:keyword" component={SearchOutput} />
          <Route exact path="/search" component={SearchOutput} />
          <Route path="/" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
