import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logocaplus from "../assets/images/logov.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [open, setOpen] = useState(false); // état pour ouvrir/fermer le sous-menu

  return (
    <div className="navigation">
      {/* Logo */}
      <img src={Logocaplus} alt="logo cap-plus" />

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

        {/* OFFRES avec sous-menu contrôlé */}
        <li className="has-submenu">
          <span className="submenu-toggle" onClick={() => setOpen(!open)}>
            OFFRES{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chevron ${open ? "rotate" : ""}`}
            />
          </span>
          {open && (
            <ul className="submenu">
              <NavLink
                to="/formations"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                onClick={() => setOpen(false)} // refermer après clic
              >
                <li>FORMATIONS</li>
              </NavLink>
              <NavLink
                to="/pisciculture"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                onClick={() => setOpen(false)}
              >
                <li>PISCICULTURE</li>
              </NavLink>
              <NavLink
                to="/pisciculturmaraichère"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                onClick={() => setOpen(false)}
              >
                <li>MARAICHAGE</li>
              </NavLink>
              <NavLink
                to="/mentorat"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
                onClick={() => setOpen(false)}
              >
                <li>MENTORAT</li>
              </NavLink>
            </ul>
          )}
        </li>

        <NavLink
          to="/galerie"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>GALERIE</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>CONTACT</li>
        </NavLink>

        
      </ul>
    </div>
  );
};

export default Navigation;
