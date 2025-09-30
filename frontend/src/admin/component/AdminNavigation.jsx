import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminNavigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>HOME</li>
        </NavLink>

        <NavLink
          to="/Apropos"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A PROPOS</li>
        </NavLink>

        <NavLink
          to="/maraichere"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>MARAICHAGE</li>
        </NavLink>

        <NavLink
          to="/galerie"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>GALERIE</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminNavigation;
