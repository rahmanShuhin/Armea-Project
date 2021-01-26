import React, { useState } from "react";

const VerifyReg = () => {
  const [valid, setValid] = useState(true);
  return (
    <div className="verifyReg">
      {valid && (
        <div>
          <h2>Ingresa el código que te enviamos por e-mail</h2>
          <p>
            Lo enviamos a{" "}
            <span style={{ color: "#FF6606" }}>Johndoe@correo.com</span> para
            confirmar que te pertenece. Si no lo encuentras revisa tu carpeta de
            correo no deseado.
          </p>
          <input type="text" placeholder="Ingrese el codigo" />
          <div className="btn_box">
            <button onClick={() => setValid(false)}>CONTINUAR</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyReg;
