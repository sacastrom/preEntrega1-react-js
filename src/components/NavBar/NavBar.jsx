import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar" >
      <nav className="navbar-container">
        <a className="navbar-brand" href="">
          <img className="navbar-image" src="https://images.squarespace-cdn.com/content/v1/568420782399a3371e683ed9/9997c3a8-baf5-4bd4-bced-de400e77a5ca/FINAL+UMAMI+LOGO_KO.jpg?format=original" alt="umami" />
          <span>UMAMI</span>
        </a>
        <ul className="navbar-links">
          <li className="navbar-link">Tienda</li>
          <li className="navbar-link">Golosinas</li>
          <li className="navbar-link">Bebidas</li>
          <li className="navbar-link">Salsas</li>
        </ul>
        <div className="navbar-session">
          <a className="navbar-session-button" href="">Iniciar Sesión</a>
          <CartWidget/>
        </div>
      </nav>
      
    </header>
  );
};

export default NavBar;
