import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Badge, Input, TextField } from "@material-ui/core";
import Nav_Cart from "./Nav_Cart";
import CheckOut from "./CheckOut";
const Navigation = () => {
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState(false);
  const handleBurger = () => {
    document.querySelector(".hamburger-menu").classList.toggle("animate");
  };
  return (
    <section className="nav__container">
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav__left">
          <Link to="/">Inicio</Link>
          <Link to="/shop">Tienda</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="nav__right">
          {!search && (
            <div>
              <Link to="/login">Ingresar</Link>
              <Link
                to="/registration"
                style={{ color: "#222222", fontWeight: "bold" }}
              >
                Registrarse
              </Link>
            </div>
          )}
          {search && <input type="text" placeholder="Buscar" />}
          <div>
            <Link onClick={() => setSearch(!search)}>
              <SearchIcon></SearchIcon>
            </Link>
            <Link onClick={() => setShowCart(!showCart)}>
              <Badge badgeContent={1} color="primary">
                <ShoppingBasketIcon></ShoppingBasketIcon>
              </Badge>
            </Link>
          </div>
        </div>
        <div class="menu-wrapper" onClick={handleBurger}>
          <div class="hamburger-menu"></div>
        </div>
        {showCart && <Nav_Cart></Nav_Cart>}
      </nav>
      {/* <CheckOut></CheckOut> */}
    </section>
  );
};

export default Navigation;
