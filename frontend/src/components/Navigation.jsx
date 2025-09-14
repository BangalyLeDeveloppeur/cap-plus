import React from "react";
import { NavLink } from "react-router-dom";
import Logocaplus from "../assets/images/logov.png";

const Navigation = () => {
  return (
    <div className="navigation">
      {/* image du log*/}
      <img src={Logocaplus} alt="log cap-plus"/>
      <ul>
        <NavLink
          /* Controle de after sur le header*/
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li> A PROPOS</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li> OFFRES</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li> GALERIE</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li> CONTACT</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
