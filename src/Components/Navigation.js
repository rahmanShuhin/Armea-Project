import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Input, TextField } from "@material-ui/core";
const Navigation = () => {
  const [search, setSearch] = useState(false);
  const handleBurger = () => {
    document.querySelector(".hamburger-menu").classList.toggle("animate");
  };
  return (
    <section className="nav__container">
      <nav className="nav">
        <Link>
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav__left">
          <Link>Inicio</Link>
          <Link>Tienda</Link>
          <Link>Nosotros</Link>
          <Link>Contacto</Link>
        </div>
        <div className="nav__right">
          {!search && (
            <div>
              <Link>Ingresar</Link>
              <Link>Registrarse</Link>
            </div>
          )}
          {search && <input type="text" placeholder="Buscar" />}
          <div>
            <Link onClick={() => setSearch(!search)}>
              <SearchIcon></SearchIcon>
            </Link>
            <Link>
              <ShoppingBasketIcon></ShoppingBasketIcon>
            </Link>
          </div>
        </div>
        <div class="menu-wrapper" onClick={handleBurger}>
          <div class="hamburger-menu"></div>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
