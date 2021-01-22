import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Badge, Input, TextField } from "@material-ui/core";
import desk from "../images/desk.png";
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
          <Link>Inicio</Link>
          <Link to="/shop">Tienda</Link>
          <Link>Nosotros</Link>
          <Link to="/contact">Contacto</Link>
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
        {showCart && (
          <div className="nav__cart" data-aos="fade-down">
            <div>
              <img src={desk} alt="" />
              <div>
                <div>
                  <h3>Escritorio Montesorri</h3>
                  <button>Eliminar</button>
                </div>
                <p style={{ color: "#FF6606" }}>
                  $999 <small style={{ color: "gray" }}> X 1</small>{" "}
                </p>
              </div>
            </div>
            <div>
              <h2>Total: $999</h2>
              <button>IR A LA CAJA</button>
            </div>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navigation;
