import React from "react";

import classes from "../Layout/Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={classes.header}>
      <div>
        <h1>CarSales</h1>
      </div>
      <nav>
        <ul className={classes.navList}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/carcollection">Car Collection</NavLink>
          <NavLink to="/location">Location</NavLink>
          <NavLink to="/services">Services</NavLink>
        </ul>
      </nav>
      <div>
        <span>+1 917 414 6014</span>
      </div>
    </div>
  );
}
