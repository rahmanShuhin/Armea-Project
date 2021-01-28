import React from "react";

const OrderModel = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="modal-order" id="orederModal">
      <div className="modal-content-order">
        <div className="close-icon" onClick={handleClose}>
          <span>&times;</span>
        </div>
        <h2>
          Resumen de <span style={{ color: "#FF6606" }}>pedído</span>{" "}
        </h2>
        <div className="modal-content-order__table1">
          <h4>Número de pedído</h4>
          <h4>1012975</h4>
          <p>Fecha de pedído</p>
          <p>10/12/2020</p>
          <p>Estado de pedído</p>
          <p>Pagado</p>
          <p>Envio</p>
          <p>Correo</p>
          <p>Método de pago</p>
          <p>Mercado pago</p>
          <h4>Total</h4>
          <h4>999$</h4>
        </div>
      </div>
    </div>
  );
};

export default OrderModel;
