import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Avatar, Badge, Input, TextField } from "@material-ui/core";
import Nav_Cart from "./Nav_Cart";
import CheckOut from "./CheckOut";
import chat from "../images/chat.png";
import { useSelector, useDispatch } from "react-redux";
const Navigation = () => {
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState(false);
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
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
          {!search && !user.user && (
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
          {!search && user.user && (
            <div className="profile__img">
              <Link to="/profile">
                <Avatar src="https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg"></Avatar>
              </Link>
              <Link to="/profile">
                <p>{user.name}</p>
              </Link>
              <img src={chat} alt="" />
            </div>
          )}
          {search && <input type="text" placeholder="Buscar" />}
          <div>
            <Link onClick={() => setSearch(!search)}>
              <SearchIcon></SearchIcon>
            </Link>
            <Link onClick={() => setShowCart(!showCart)}>
              <Badge badgeContent={products.length} color="primary">
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
    </section>
  );
};

export default Navigation;
