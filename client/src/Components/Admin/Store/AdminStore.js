import React, { useState } from "react";
import AdminProfile from "../AdminProfile";
import Clients from "./Clients";
import NewProduct from "./NewProduct";
import Products from "./Products";
import Requests from "./Requests";

const AdminStore = () => {
  const [step, setStep] = useState(1);
  const [showNew, setShowNew] = useState(false);
  return (
    <div className="adminStore">
      <div className="adminTop">
        <div>
          <h2>Tienda</h2>
          {!showNew && (
            <>
              <button
                className={step === 1 && "active"}
                onClick={() => setStep(1)}
              >
                productos
              </button>
              <button
                className={step === 2 && "active"}
                onClick={() => setStep(2)}
              >
                pedidos
              </button>
              <button
                className={step === 3 && "active"}
                onClick={() => setStep(3)}
              >
                clientes
              </button>
            </>
          )}
        </div>
        <AdminProfile></AdminProfile>
      </div>
      {step === 1 && !showNew && <Products setShowNew={setShowNew}></Products>}
      {step === 2 && !showNew && <Requests></Requests>}
      {step === 3 && !showNew && <Clients></Clients>}
      {showNew && <NewProduct setShowNew={setShowNew}></NewProduct>}
    </div>
  );
};

export default AdminStore;
