import React, { useState } from "react";
import AdminProfile from "../AdminProfile";
import Clients from "./Clients";
import Products from "./Products";
import Requests from "./Requests";

const AdminStore = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="adminStore">
      <div className="adminTop">
        <div>
          <h2>Tienda</h2>
          <button className={step === 1 && "active"} onClick={() => setStep(1)}>
            productos
          </button>
          <button className={step === 2 && "active"} onClick={() => setStep(2)}>
            pedidos
          </button>
          <button className={step === 3 && "active"} onClick={() => setStep(3)}>
            clientes
          </button>
        </div>
        <AdminProfile></AdminProfile>
      </div>
      {step === 1 && <Products></Products>}
      {step === 2 && <Requests></Requests>}
      {step === 3 && <Clients></Clients>}
    </div>
  );
};

export default AdminStore;
