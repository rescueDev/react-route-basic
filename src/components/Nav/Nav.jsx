import React from "react";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <nav className={classes.nav}>
      <h3>Logo</h3>
      <ul className={classes.items}>
        <li>Top News</li>
        <li>All News</li>
        <li>Authors</li>
      </ul>
    </nav>
  );
}

export default Nav;
