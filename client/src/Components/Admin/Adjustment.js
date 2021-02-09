import { Button, Switch } from "@material-ui/core";
import React, { useState } from "react";
import AdminProfile from "./AdminProfile";

const Adjustment = () => {
  const [chk1, setChk1] = useState(false);
  const [chk2, setChk2] = useState(false);
  const [chk3, setChk3] = useState(false);
  const [chk4, setChk4] = useState(false);
  const [chk5, setChk5] = useState(false);
  const [chk6, setChk6] = useState(false);
  const [chk7, setChk7] = useState(false);

  return (
    <div className="adminAdjustment">
      <div className="adminTop">
        <h2>Ajuste</h2>
        <AdminProfile></AdminProfile>
      </div>
      <div className="adminAdjustment__bottom">
        <div>
          <h2>Metodos de pago</h2>
          <div>
            <p>mercado pago</p>
            <Switch
              checked={chk1}
              onChange={() => setChk1(!chk1)}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <button>Configurar</button>
          </div>
        </div>
        <div>
          <h2>Opciones de envío</h2>
          <p className="adjust__title">CÁLCULOS</p>
          <p>
            <Switch
              checked={chk2}
              onChange={() => setChk2(!chk2)}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            ACTIVAR CALCULADORA DE ENVIOS EN LA PAGINA DE COMPRA
          </p>
          <p>
            <Switch
              checked={chk3}
              onChange={() => setChk3(!chk3)}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            OCULTAR LOS GASTOS DE ENVIO HASTA QUE SE INTRODUZCA LA DIRECCION
          </p>
        </div>
        <div>
          <p className="adjust__title_2">DESTINO DEL ENVIÓ</p>
          <p>
            <Switch
              checked={chk4}
              onChange={() => setChk4(!chk4)}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            envio gratis
            <button className="adjust__btn_2">Configurar</button>
          </p>
          <p>
            <Switch
              checked={chk5}
              onChange={() => setChk5(!chk5)}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            POR DEFECTO A LA DIRECCIÓN DE ENVIÓ DEL CLIENTE
          </p>
          <p>
            <Switch
              checked={chk6}
              onChange={() => setChk5(!chk6)}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            POR DEFECTO A LA DIRECCIÓN DE FACBTURACIÓN DEL CLIENTE
          </p>
          <button className="adjust__btn_3">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Adjustment;
