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
          <h3>Informacion</h3>
          <Link>Zonas de envío</Link>
          <Link>Zonas de envío</Link>
          <Link>Política de cookies</Link>
          <Link>Condiciones de uso y compra </Link>
          <Link>Cómo hacer un pedido</Link>
          <Link>Métodos de pago</Link>
        </div>
        <div>
          <h3>Cuenta</h3>
          <Link>Mis compras</Link>
          <Link>MIs direcciones</Link>
          <Link>Mis datos personales</Link>
        </div>
        <div>
          <h3>Contacto</h3>
          <Link>Mariano escobedo 2631 col. victoria monterry n.l.</Link>
          <p>
            <LocationOnRoundedIcon></LocationOnRoundedIcon> Mexico
          </p>
          <p>
            <CallRoundedIcon></CallRoundedIcon>
            (81) 8245 4321
          </p>
          <p>ventas@armeamuebles.com</p>
          <p>armeamuebles.com</p>
        </div>
        <div>
          <h3>Suscribete</h3>
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
