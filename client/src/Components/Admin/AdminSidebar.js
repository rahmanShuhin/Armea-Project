import React from "react";
import admin_logo from "../../images/admin_logo.png";
import dash_icon from "../../images/dash_icon.png";
import ticket_icon from "../../images/ticket_icon.png";
import light_icon from "../../images/light_icon.png";
const AdminSidebar = ({ step, setStep }) => {
  return (
    <div className="adminSide">
      <div>
        <img src={admin_logo} alt="" />
      </div>
      <div className="button">
        <div className={step === 1 && "active"} onClick={() => setStep(1)}>
          <img src={dash_icon} alt="" />
          Tablero
        </div>
        <div className={step === 2 && "active"} onClick={() => setStep(2)}>
          <img src={ticket_icon} alt="" />
          Entradas
        </div>
        <div className={step === 3 && "active"} onClick={() => setStep(3)}>
          <img src={light_icon} alt="" />
          Tienda
        </div>
        <div className={step === 4 && "active"} onClick={() => setStep(4)}>
          <img src={light_icon} alt="" />
          Ajustes
        </div>
        <div className={step === 5 && "active"} onClick={() => setStep(5)}>
          <img src={light_icon} alt="" />
          Correos
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
