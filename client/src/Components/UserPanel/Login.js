import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import { signIn } from "../actions";
const schema = yup.object().shape({
  email: yup
    .string()
    .required("el correo electrónico es un campo obligatorio")
    .email("el correo electrónico debe ser un correo electrónico válido"),
  password: yup
    .string()
    .required("La contraseña es un campo requerido")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const Login = () => {
  const dispatch = useDispatch();
  const [dis, setDis] = useState(false);
  const [err, setErr] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  let history = useHistory();
  const onSubmit = (data) => {
    setDis(true);
    setErr(null);
    fetch("https://stormy-depths-57114.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          setErr(json);
          setDis(false);
        } else {
          var decoded = jwt_decode(json.token);
          console.log(decoded);
          dispatch(
            signIn(
              decoded._id,
              decoded.email,
              decoded.name,
              decoded.country,
              decoded.region,
              json.token,
              decoded.verified
            )
          );
          sessionStorage.setItem("user-token", json.token);
          history.push("/profile");
        }
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("user-token")) {
      history.push("/profile");
    }
  }, []);
  return (
    <div className="login">
      <div>
        <h2>Para seguir, ingresa tu e-mail y contraseña</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <small style={{ color: "red" }}>{errors.email?.message}</small>
            <input
              type="text"
              name="email"
              placeholder="Ingrese su email"
              ref={register}
              style={errors.email && { border: "1px solid red" }}
            />
          </div>
          <div>
            <label htmlFor="Contraseña">Contraseña</label>
            <small style={{ color: "red" }}>{errors.password?.message}</small>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              name="password"
              ref={register}
              style={errors.password && { border: "1px solid red" }}
            />
          </div>
          <div>
            <small style={{ color: "red", margin: "auto" }}>
              {err && err.error}
            </small>
          </div>
          <div>
            <button
              disabled={dis}
              className={dis && "btn__disable"}
              type="submit"
            >
              INGRESAR
            </button>
            <Link to="/registration">CREAR CUENTA</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
