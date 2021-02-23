import React, { useEffect } from "react";
import pop_up from "../images/pop_up.png";
import { useHistory } from "react-router-dom";
const Modal = () => {
  let history = useHistory();
  const handleClose = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };
  useEffect(() => {
    const modal = document.getElementById("myModal");
    setTimeout(() => {
      modal.style.display = "block";
    }, 1000);
  }, []);
  return (
    <div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <div>
            <img src={pop_up} alt="" />
          </div>
          <div>
            <span class="close" onClick={handleClose}>
              &times;
            </span>
            <div>
              <small>Solo por hoy</small>
              <h2>-20% EN MUEBLES </h2>
              <p>
                Accede a nuestro catálogo online y encuentra el mueble que
                combina con tu personalidad .
              </p>
              <button onClick={() => history.push("/checkout")}>
                LO QUIERO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
