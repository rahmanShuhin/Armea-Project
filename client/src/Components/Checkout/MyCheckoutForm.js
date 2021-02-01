import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const MyCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    // });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <form id="payment-form">
      <div className="card-element">
        <label htmlFor="cardNumber">CardNumber</label>
        <label htmlFor="cvc">CVC</label>
      </div>
      <CardElement></CardElement>
    </form>
  );
};

export default MyCheckoutForm;
