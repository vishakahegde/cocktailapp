import React from "react";
import "./App.css";
import { Link, useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();
  const doSearch = (e) => {
    e.preventDefault();
    const newSearchText = e.target["query"].value;
    const routeParam = encodeURIComponent(newSearchText);

    history.push(`/search/${routeParam}`);
  };
  return (
    <nav>
      <Link to={"/"}>Home </Link>

      <form onSubmit={doSearch}>
        <input name="query" type="search" placeholder="type here" />
      </form>
    </nav>
  );
}
