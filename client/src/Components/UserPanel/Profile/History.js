import React, { useState } from "react";
import OrderModel from "./OrderModel";

const History = () => {
  const [show, setShow] = useState(false);
  const handleMOdal = () => {
    setShow(true);
  };
  return (
    <div className="profile__container__2">
      <h2>History</h2>
      <div className="orderHistory">
        <div className="orderHistory__top">
          <h3>Pedidos</h3>
          <div className="selectBox">
            <select name="orderBy">
              <option disabled selected>
                Ordenar por
              </option>
              <option value="date">Fecha de orden</option>
              <option value="low">Precio baja a alta</option>
              <option value="high">Precio alta a baja</option>
            </select>
          </div>
        </div>
        <div>
          <table>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Fecha</th>
              <th>Monto</th>
            </tr>
            <tr>
              <td>Escritorio Montesorri</td>
              <td>3</td>
              <td>12/2020</td>
              <td>999$</td>
              <td>
                <button onClick={handleMOdal}>ver</button>
              </td>
            </tr>
            <tr>
              <td>Escritorio Montesorri</td>
              <td>3</td>
              <td>12/2020</td>
              <td>999$</td>
              <td>
                <button onClick={handleMOdal}>ver</button>
              </td>
            </tr>
            <tr>
              <td>Escritorio Montesorri</td>
              <td>3</td>
              <td>12/2020</td>
              <td>999$</td>
              <td>
                <button onClick={handleMOdal}>ver</button>
              </td>
            </tr>
            <tr>
              <td>Escritorio Montesorri</td>
              <td>3</td>
              <td>12/2020</td>
              <td>999$</td>
              <td>
                <button onClick={handleMOdal}>ver</button>
              </td>
            </tr>
            <tr>
              <td>Escritorio Montesorri</td>
              <td>3</td>
              <td>12/2020</td>
              <td>999$</td>
              <td>
                <button onClick={handleMOdal}>ver</button>
              </td>
            </tr>
            <tr>
              <td>Escritorio Montesorri</td>
              <td>3</td>
              <td>12/2020</td>
              <td>999$</td>
              <td>
                <button onClick={handleMOdal}>ver</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      {show && <OrderModel show={show} setShow={setShow}></OrderModel>}
    </div>
  );
};

export default History;
