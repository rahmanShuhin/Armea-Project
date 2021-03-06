import React from "react";
import AdminProfile from "./AdminProfile";
import SalesTable from "./SalesTable";
const Sales_Report = () => {
  return (
    <div className="salesReport">
      <div className="adminTop">
        <h2>Reportes</h2>
        <AdminProfile></AdminProfile>
      </div>
      <div className="salesReport__body">
        <p>ordenar por:</p>
        <select name="category">
          <option value="CATEGORIA" disabled>
            CATEGORIA
          </option>
          <option value="DECORACIÓN">DECORACIÓN</option>
          <option value="MASCOTAS">MASCOTAS</option>
          <option value="MUEBLES">MUEBLES</option>
          <option value="NIÑOS">NIÑOS</option>
        </select>

        <select name="month">
          <option value="MES" disabled>
            MES
          </option>
          <option value="ENERO">ENERO</option>
          <option value="FEBRERO">FEBRERO</option>
          <option value="MARZO">MARZO</option>
          <option value="ABRIL">ABRIL</option>
          <option value="MAYO">MAYO</option>
          <option value="JUNIO">JUNIO</option>
          <option value="JULIO">JULIO</option>
          <option value="AGOSTO">AGOSTO</option>
          <option value="SEPTIEMBRE">SEPTIEMBRE</option>
          <option value="OCTUBRE">OCTUBRE</option>
          <option value="NOVIEMBRE">NOVIEMBRE</option>
          <option value="DICIEMBRE">DICIEMBRE</option>
        </select>
        <button>producto</button>
        <button>Rango fecha</button>
        <button>descargar</button>
      </div>
      <SalesTable></SalesTable>
    </div>
  );
};

export default Sales_Report;
