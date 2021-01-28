import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
const VerifyReg = () => {
  const [valid, setValid] = useState(false);
  return (
    <div className="verifyReg">
      {!valid && (
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
            <button onClick={() => setValid(true)}>CONTINUAR</button>
          </div>
        </div>
      )}
      {valid && (
        <div className="checkBox ">
          <div className="checkIcon">
            <CheckIcon></CheckIcon>
          </div>
          <h2>¡John! Creaste tu cuenta en Armea</h2>
          <div className="btn_box">
            <button onClick={() => setValid(true)}>CONTINUAR</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyReg;
