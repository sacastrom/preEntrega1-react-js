import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <Link className="navbar-brand" to={"/"}>
          <span>UMAMI</span>
        </Link>
        <ul className="navbar-links">
          <li>
            <NavLink className="navbar-link" to={"/"}>
              Tienda
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to={`/categoria/golosinas`}>
              Golosinas
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to={`/categoria/bebidas`}>
              Bebidas
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to={`/categoria/salsas`}>
              Salsas
            </NavLink>
          </li>
        </ul>
        <div className="navbar-session">
          {/* <a className="navbar-session-button" href="#">
            Iniciar Sesión
          </a> */}
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
