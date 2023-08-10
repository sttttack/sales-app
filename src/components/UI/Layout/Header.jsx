import CarLogo from "../../../assets/car.png";

import classes from "../Layout/Header.module.css";
import CallButton from "../CallButton";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={CarLogo} />
        <h1>Mobile</h1>
      </div>
      <nav>
        <ul className={classes.navList}>
          <NavLink to="/" className={classes.navLinks}>
            Home
          </NavLink>
          <NavLink to="/about" className={classes.navLinks}>
            About
          </NavLink>
          <NavLink to="/services" className={classes.navLinks}>
            Services
          </NavLink>
          <NavLink to="/carcollection" className={classes.navLinks}>
            Car Collection
          </NavLink>
          <NavLink to="/location" className={classes.navLinks}>
            Location
          </NavLink>
          <NavLink to="/services" className={classes.navLinks}>
            Services
          </NavLink>
        </ul>
      </nav>
      <div>
        <CallButton />
      </div>
    </div>
  );
}
