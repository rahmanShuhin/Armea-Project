import React from "react";
import desk from "../images/desk.png";

const Nav_Cart = () => {
  return (
    <div className="nav__cart" data-aos="fade-down">
      <div>
        <img src={desk} alt="" />
        <div>
          <div>
            <h3>Escritorio Montesorri</h3>
            <button>Eliminar</button>
          </div>
          <p style={{ color: "#FF6606" }}>
            $999 <small style={{ color: "gray" }}> X 1</small>{" "}
          </p>
        </div>
      </div>
      <div>
        <h2>Total: $999</h2>
        <button>IR A LA CAJA</button>
      </div>
    </div>
  );
};

export default Nav_Cart;
