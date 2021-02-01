import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert();
    history.goBack();
  };
  return (
    <div className="login">
      <div>
        <h2>Para seguir, ingresa tu e-mail y contraseña</h2>
        <form onSubmit={handleSubmit}>
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
            <Link to="/registration">CREAR CUENTA</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
