import React from "react";

import classes from "../Layout/Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <div>
        <h1>CarSales</h1>
      </div>
      <nav>
        <ul className={classes.navList}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Car Collection</li>
          <li>Location</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <span>+1 917 414 6014</span>
      </div>
    </div>
  );
}
