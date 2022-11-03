import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/-5929053184075086659_121-removebg-preview.png";
import classes from "./NavComponents.module.css";

const NavComponent: React.FC<{ showNav: boolean }> = ({ showNav }) => {
  return (
    <div
      className={classes.side_nav}
      style={{
        left: showNav ? "0" : "-150%",
      }}
    >
      <div className={classes.top}>
        <div className={classes.img}>
          <img src={img} alt="personal img" />
        </div>
        <h3>mohamed gamal</h3>
        <p>front-end developer</p>
      </div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/home"
        >
          home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/about"
        >
          about
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/projects"
        >
          projects
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/contact"
        >
          contact
        </NavLink>
      </nav>
    </div>
  );
};

export default NavComponent;
