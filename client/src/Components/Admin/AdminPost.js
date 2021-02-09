import React from "react";
import AdminProfile from "./AdminProfile";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TicketTable from "./TicketTable";
const AdminPost = () => {
  return (
    <div className="adminPost">
      <div className="adminTop">
        <h2>Correos</h2>
        <AdminProfile></AdminProfile>
      </div>
      <div className="adminPost__body">
        <div>
          <div>
            <p style={{ fontSize: "12px", fontWeight: "bold" }}>
              APLICAR A SELECCION
            </p>
            <button
              style={{
                marginRight: "10px",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              ACTIVAR
            </button>
            <button>DESACTIVAR</button>
          </div>
          <div>
            <div>
              <button>
                <AddCircleIcon></AddCircleIcon>
              </button>
              <p>Agregar nuevo tipo de correo</p>
            </div>
          </div>
        </div>
        <TicketTable></TicketTable>
      </div>
    </div>
  );
};

export default AdminPost;
