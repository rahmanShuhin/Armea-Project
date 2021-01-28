import React from "react";
import TopSection from "./SameComp/TopSection";
import ship_area from "../images/ship_area.png";
const ShippngAreas = () => {
  return (
    <div className="cookies">
      <div>
        <TopSection
          h_2={"Zonas de  "}
          spa_n={"envió"}
          lin_K={"Zonas de envió"}
        ></TopSection>
      </div>
      <div>
        <p>
          En la actualidad desde armeamuebles.com enviamos a las siguientes
          regiónes:
        </p>
        <table>
          <tr>
            <th>Región</th>
            <th>Precio sin impuestos </th>
            <th>Portes (porcentaje del precio total del carrito)</th>
          </tr>
          <tr>
            <td>NorOeste</td>
            <td>Sin Mínimo</td>
            <td>
              5$ para pedidos inferiores a 25$, GRATIS para pedidos superiores
            </td>
          </tr>
          <tr>
            <td>NoEste</td>
            <td>5$</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Oriente</td>
            <td>5$</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>CentroNorte</td>
            <td>5$</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>CentroSur</td>
            <td>5$</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>SurOeste</td>
            <td>5$</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>SurEste</td>
            <td>5$</td>
            <td>10%</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ShippngAreas;
