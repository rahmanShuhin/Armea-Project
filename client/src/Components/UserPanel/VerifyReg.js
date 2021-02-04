import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../actions";
import { useHistory } from "react-router-dom";
const VerifyReg = ({ email }) => {
  const [valid, setValid] = useState(false);
  const [input, setInput] = useState("");
  const [dis, setDis] = useState(false);
  const [err, setErr] = useState(null);
  const user = useSelector((state) => state.user);
  let history = useHistory();
  const dispatch = useDispatch();
  const handleVerification = () => {
    fetch("https://stormy-depths-57114.herokuapp.com/verified", {
      method: "PATCH",
      body: JSON.stringify({
        email: user.email,
        password: input,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          console.log(json);
          setErr(json.error);
        } else {
          dispatch(signIn(user.id, user.email, user.name, user.token, true));
          setValid(true);
        }
      });
  };
  return (
    <div className="verifyReg">
      {!valid && (
        <div>
          <h2>Ingresa el código que te enviamos por e-mail</h2>
          <p>
            Lo enviamos a <span style={{ color: "#FF6606" }}>{email}</span> para
            confirmar que te pertenece. Si no lo encuentras revisa tu carpeta de
            correo no deseado.
          </p>
          <input
            type="text"
            placeholder="Ingrese el codigo"
            onChange={(e) => setInput(e.target.value)}
          />
          <div>
            {err && (
              <small style={{ color: "red", margin: "auto" }}>
                Codigo invalido
              </small>
            )}
          </div>
          <div className="btn_box">
            <button disabled={dis} onClick={handleVerification}>
              CONTINUAR
            </button>
          </div>
        </div>
      )}
      {valid && (
        <div className="checkBox ">
          <div className="checkIcon">
            <CheckIcon></CheckIcon>
          </div>
          <h2>¡{user?.name}! Creaste tu cuenta en Armea</h2>
          <div className="btn_box">
            <button onClick={() => history.push("/profile")}>CONTINUAR</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyReg;
