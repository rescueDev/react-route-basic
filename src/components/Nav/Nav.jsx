import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={classes.nav}>
      <h3>Logo</h3>
      <ul className={classes.items}>
        <Link to="/topnews">
          <li>Top News</li>
        </Link>
        <Link to="/allnews">
          <li>All News</li>
        </Link>
        <Link to="/authors">
          <li>Authors</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
