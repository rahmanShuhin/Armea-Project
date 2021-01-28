import React, { useEffect } from "react";
import desk from "../images/desk.png";
const Modal = () => {
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
            <img src={desk} alt="" />
          </div>
          <div>
            <span class="close" onClick={handleClose}>
              &times;
            </span>
            <div>
              <small>Solo por hoy</small>
              <h2>-20% EN MUEBLES </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                a pretium elit
              </p>
              <button>LO QUIERO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
