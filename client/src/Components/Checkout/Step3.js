import React from "react";
import desk from "../../images/desk.png";
import DeleteIcon from "@material-ui/icons/Delete";
const Step3 = () => {
  return (
    <div className="step3">
      <h2>Resumen de pedido</h2>
      <div className="checkout__cart">
        <img src={desk} alt="" />
        <div>
          <div>
            <h3>Escritorio Montesorri</h3>
            <button>
              <DeleteIcon></DeleteIcon>
            </button>
          </div>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar massa et diam posuere
          </small>
          <div className="colorBox">
            <p>Color</p>
            <div></div>
          </div>
          <div className="cart_count">
            <div>
              <p>Cantidad</p>
              <div className="cart__counter">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div>
              <h3>Monto</h3>
              <h4 style={{ color: "#FF6606", marginLeft: "18px" }}>$999</h4>
            </div>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "right", marginTop: "20px" }}>Monto total</p>
      <h4 style={{ textAlign: "right", color: "#FF6606" }}>$999</h4>
    </div>
  );
};

export default Step3;
