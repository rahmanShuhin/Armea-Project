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
      <Elements stripe={stripePromise}>
        <MyCheckoutForm></MyCheckoutForm>
      </Elements>
    </div>
  );
};

export default Step2;
