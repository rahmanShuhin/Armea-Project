import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div>
        <h2>Para seguir, ingresa tu e-mail y contraseña</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Ingrese su email" />
          </div>
          <div>
            <label htmlFor="Contraseña">Contraseña</label>
            <input type="text" placeholder="Ingrese su contraseña" />
          </div>
          <div>
            <button type="submit">INGRESAR</button>
            <Link>CREAR CUENTA</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
