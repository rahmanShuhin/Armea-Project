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
        <div className="modal-content-order__table1">
          <h4>Datos de cobro</h4>
          <h4>Envió</h4>
          <div>
            <p>Email</p>
            <p>Johndoe@correo.com</p>
          </div>
          <div>
            <p>Nombre</p>
            <p>John</p>
          </div>
          <div>
            <p>Nombre</p>
            <p>John</p>
          </div>
          <div>
            <p>Apellido</p>
            <p>Doe</p>
          </div>
          <div>
            <p>Apellido</p>
            <p>Doe</p>
          </div>
          <div>
            <p>Codigo postal</p>
            <p>05055</p>
          </div>
          <div>
            <p>Codigo postal</p>
            <p>05055</p>
          </div>
          <div>
            <p>Dirección</p>
            <p>Ventura 205 Col. Residencial San Pedro Monterrey, N,L.</p>
          </div>
          <div>
            <p>Dirección</p>
            <p>Ventura 205 Col. Residencial San Pedro Monterrey, N,L.</p>
          </div>
          <div>
            <p>Ciudad</p>
            <p>monterrey</p>
          </div>
          <div>
            <p>Ciudad</p>
            <p>monterrey</p>
          </div>
          <div>
            <p>Telefono</p>
            <p>09873572</p>
          </div>
          <div>
            <p>Telefono</p>
            <p>09873572</p>
          </div>
        </div>
        <h4>Artículos del pedido</h4>
        <div className="grid_table">
          <table>
            <tr>
              <th>Producto</th>
              <th>Estado</th>
              <th>Precio</th>
              <th>Cta</th>
              <th>Impuesto</th>
              <th>Descuento</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>Escritorio Montesorri</td>
              <td>Pagado</td>
              <td>999$</td>
              <td>1</td>
              <td>0$</td>
              <td>0$</td>
              <td>999$</td>
            </tr>
          </table>
          <div>
            <p>Total precio del producto</p>
            <p>0$</p>
            <p>0$</p>
            <h4>{999}$</h4>
          </div>
          <div>
            <p>Envió</p>
            <p>0$</p>
            <p></p>
            <h4>$0.5</h4>
          </div>
          <div>
            <p>Cargo de pago</p>
            <p>0$</p>
            <p></p>
            <h4>$0.5</h4>
          </div>
          <div>
            <p></p>
            <p></p>
            <p>Total</p>
            <h4>1000$</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModel;
