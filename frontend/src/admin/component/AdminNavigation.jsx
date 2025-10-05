import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Authentification.jsx";

const AdminNavigation = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handLogout = () => {
    setToken(null);
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    navigate("/admin");
  };

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
          to="/AdminMaraichage"
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
      <button onClick={handLogout}>Déconnexion</button>
    </div>
  );
};

export default AdminNavigation;
