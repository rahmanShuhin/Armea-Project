import React, { useState } from "react";
import Registration from "../Components/UserPanel/Registration";
import Step1 from "./Checkout/Step1";
import Step2 from "./Checkout/Step2";
import Step3 from "./Checkout/Step3";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const CheckOut = () => {
  const [step, setStep] = useState(1);
  let history = useHistory();
  return (
    <div className="checkout">
      {step !== 4 && (
        <div className="checkout__Modal">
          <h2 style={{ color: "#FF6606", textAlign: "center" }}>Checkout</h2>
          <div className="checkout__stepper">
            <div>
              <button className={step >= 1 && "active__step"}>1</button> Datos
              personales
            </div>
            <div></div>
            <div>
              <button
                className={
                  (step == 2 && "active__step") || (step == 3 && "active__step")
                }
              >
                2
              </button>{" "}
              Método de pago
            </div>
            <div></div>
            <div>
              <button className={step === 3 && "active__step"}>3</button>{" "}
              Dirección
            </div>
          </div>
          {step === 1 && <Step1 setStep={setStep}></Step1>}
          {step === 2 && <Step2 setStep={setStep}></Step2>}
          {step === 3 && <Step3 setStep={setStep}></Step3>}
          {step === 1 && (
            <div className="btn_box">
              <button onClick={() => setStep(2)}>REGISTRARME</button>
              <button>INVITADO</button>
            </div>
          )}
          {step === 2 && (
            <div className="btn_box">
              <button onClick={() => setStep(3)}>CONTINUAR</button>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className="btn_box">
                <button onClick={() => setStep(4)}>COMPRAR</button>
              </div>
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <input type="checkbox" name="" id="" />
                <small style={{ marginLeft: "10px" }}>
                  Acepto los{" "}
                  <span style={{ color: "#FF6606" }}>
                    Términos y Condiciones
                  </span>{" "}
                  y autorizo el uso de mis datos de acuerdo a la Declaración de
                  Privacidad.
                </small>
              </div>
            </div>
          )}
        </div>
      )}
      {step === 4 && (
        <div className="orderSuccees">
          <div className="checkBox ">
            <div className="checkIcon">
              <CheckIcon></CheckIcon>
            </div>
            <h2>¡John! Creaste tu cuenta en Armea</h2>
            <Link>ver resumen</Link>
            <div className="btn_box">
              <button onClick={() => history.push("/")}>CONTINUAR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
