import React from "react";
import { reg } from "./Form_data";

const Registration = () => {
  return (
    <div className="registration">
      <form>
        <h2>Completa tus datos</h2>
        <div>
          {reg.map((x) => (
            <div>
              <label htmlFor={x.name}>{x.label}</label>
              <input type={x.type} placeholder={x.placeholder} />
            </div>
          ))}
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <small>
            Acepto los Términos y Condiciones y autorizo el uso de mis datos de
            acuerdo a la Declaración de Privacidad.
          </small>
        </div>
        <div className="btn_box">
          <button>CONTINUAR</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
