import React from "react";
import { checkout_reg } from "../UserPanel/Form_data";

const Step1 = ({ setStep }) => {
  return (
    <div className="step1">
      <div>
        <h2>Ingresa tus datos personales</h2>
        <button>INGRESAR</button>
      </div>
      <form>
        {checkout_reg.map((x) => (
          <div>
            <label htmlFor="">{x.label}</label>
            <input type="text" placeholder={x.placeholder} />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Step1;
