import React from "react";
import hand from "../../images/hand.png";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyCheckoutForm from "./MyCheckoutForm";
const stripePromise = loadStripe("pk_test_uwGFNAgFfL5YGheJU0H4pDSv00UVKarKZx");

const Step2 = ({ setStep }) => {
  return (
    <div className="step2">
      <h2>Ingresa tus datos de pago</h2>
      <div>
        <img src={hand} alt="" />
        <p>Mercado pago</p>
      </div>
      <form>
        <div>
          <p>Numero de tarjeta</p>
          <input type="text" placeholder="Ingrese numero de tarjeta" />
        </div>
        <div>
          <div>
            <p>Documento</p>
            <div style={{ display: "flex" }}>
              <select name="" id="">
                <option value="CURP" selected>
                  CURP
                </option>
              </select>
              <input
                type="text"
                placeholder="Seleccione su documento"
                style={{ flex: "0.8" }}
              />
            </div>
          </div>
          <div>
            <p>Titular</p>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Fecha de vencimeinto</p>
            <input type="text" placeholder="MM/AA" style={{ width: "90%" }} />
          </div>
          <div>
            <p>Codigo de seguridad</p>
            <input type="text" placeholder="CVV" style={{ width: "100%" }} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2;
