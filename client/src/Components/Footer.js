import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h3>Información</h3>
          <Link to="/shippingAres">Zonas de envío</Link>
          <Link to="/cookies">Política de cookies</Link>
          <Link to="/terms-of-use">Condiciones de uso y compra</Link>
          <Link to="/how-to-order">Cómo hacer un pedido</Link>
          <Link to="/paymentMethod">Métodos de pago</Link>
        </div>
        <div>
          <h3>Cuenta</h3>
          <Link>Mis compras</Link>
          <Link>MIs direcciones</Link>
          <Link>Mis datos personales</Link>
        </div>
        <div>
          <h3>Contacto</h3>
          <Link>Mariano Escobedo 2631 Col. Victoria Monterrey N.L.</Link>
          <p>
            <LocationOnRoundedIcon></LocationOnRoundedIcon> México
          </p>
          <p>
            <CallRoundedIcon></CallRoundedIcon>
            (81) 8245 4321
          </p>
          <p>ventas@armeamuebles.com</p>
          <p>armeamuebles.com</p>
        </div>
        <div>
          <h3>Suscríbete</h3>
          <div className="sendEmail">
            <input type="text" placeholder="Ingresa email" />
            <button>
              <SendRoundedIcon></SendRoundedIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
