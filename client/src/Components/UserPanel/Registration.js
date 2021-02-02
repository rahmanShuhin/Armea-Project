import React from "react";
import { Link } from "react-router-dom";
import { reg } from "./Form_data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  last_name: yup.string().required(),
  direction: yup.string().required(),
  region: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  checkbox: yup.string().required(),
});

const Registration = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    alert();
  };
  console.log(errors, typeof errors);
  return (
    <div className="registration">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Completa tus datos</h2>
        <div>
          {reg.map((x) => (
            <div>
              <label htmlFor={x.name}>{x.label}</label>
              <small style={{ color: "red" }}>{errors[x.name]?.message}</small>
              <input
                name={x.name}
                type={x.type}
                placeholder={x.placeholder}
                ref={register}
                style={errors[x.name] && { border: "1px solid red" }}
              />
            </div>
          ))}
        </div>
        <div>
          <input
            type="checkbox"
            required
            name="checkbox"
            id=""
            ref={register}
          />
          <small>
            Acepto los Términos y Condiciones y autorizo el uso de mis datos de
            acuerdo a la Declaración de Privacidad.
          </small>
        </div>
        <div className="btn_box">
          {/* <Link to="/verify">CONTINUAR</Link> */}
          <button type="submit">CONTINUAR</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
