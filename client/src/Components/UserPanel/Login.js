import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  let history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    alert();
  };

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
              type="text"
              placeholder="Ingrese su contraseña"
              name="password"
              ref={register}
              style={errors.password && { border: "1px solid red" }}
            />
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
