import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { reg } from "./Form_data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import VerifyReg from "./VerifyReg";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../actions";
import jwt_decode from "jwt-decode";
const schema = yup.object().shape({
  name: yup.string().required("Faltaba tu nombre."),
  last_name: yup.string().required("Faltaba tu apellido."),
  direction: yup.string().required("Faltaba tu dirección."),
  region: yup.string().required("Faltaba tu región."),
  email: yup
    .string()
    .required("Faltaba su correo electrónico.")
    .email("el correo electrónico debe ser un correo electrónico válido"),
  password: yup
    .string()
    .required("Faltaba tu contraseña.")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  checkbox: yup.string().required(),
});

const Registration = () => {
  const [veri, setVeri] = useState(false);
  const [email, setEmail] = useState("");
  const [dis, setDis] = useState(false);
  const [err, setErr] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    setDis(true);

    fetch("http://localhost:5000/registration", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          setErr(json);
        } else {
          console.log(json);
          setEmail(data.email);
          setVeri(true);
          var decoded = jwt_decode(json.token);
          console.log(decoded);
          dispatch(
            signIn(
              decoded._id,
              decoded.email,
              decoded.name,
              decoded.token,
              decoded.verified
            )
          );
        }
      });
  };
  useEffect(() => {
    if (user) {
      if (user.verified === false) {
        setVeri(true);
      }
    }
  }, [user]);
  return (
    <div>
      {!veri ? (
        <div className="registration">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Completa tus datos</h2>
            <div>
              {reg.map((x) => (
                <div>
                  <label htmlFor={x.name}>{x.label}</label>
                  <small style={{ color: "#f7766d" }}>
                    {errors[x.name]?.message}
                  </small>
                  <input
                    name={x.name}
                    type={x.type}
                    placeholder={x.placeholder}
                    ref={register}
                    style={errors[x.name] && { border: "1px solid #f7766d" }}
                  />
                </div>
              ))}
            </div>
            <div>
              <small style={{ color: "red", margin: "10px auto" }}>
                {err && err.error}
              </small>
            </div>
            <div>
              <input type="checkbox" required name="checkbox" ref={register} />
              <small>
                Acepto los Términos y Condiciones y autorizo el uso de mis datos
                de acuerdo a la Declaración de Privacidad.
              </small>
            </div>

            <div className="btn_box">
              {/* <Link to="/verify">CONTINUAR</Link> */}
              <button disabled={dis} type="submit">
                CONTINUAR
              </button>
            </div>
          </form>
        </div>
      ) : (
        <VerifyReg email={email}></VerifyReg>
      )}
    </div>
  );
};

export default Registration;
