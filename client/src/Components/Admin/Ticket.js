import React, { useState } from "react";
import AdminProfile from "./AdminProfile";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TicketTable from "./TicketTable";
import NewTicket from "./NewTicket";

const Ticket = () => {
  const [newTic, setNewTic] = useState(false);
  return (
    <div className="adminTicket">
      <div className="adminTop">
        <h2>Entradas</h2>
        <AdminProfile></AdminProfile>
      </div>
      {!newTic && (
        <>
          <div className="adminTicket__body">
            <div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                  APLICAR A SELECCION
                </p>
                <button
                  style={{
                    color: "#BF0E08",
                    marginRight: "10px",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  ELIMINAR
                </button>
                <button>CLONAR</button>
              </div>
              <div>
                <div>
                  <button onClick={() => setNewTic(true)}>
                    <AddCircleIcon></AddCircleIcon>
                  </button>
                  <p>Nueva entrada</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "10px 40px" }}>
            <TicketTable></TicketTable>
          </div>
        </>
      )}
      {newTic && <NewTicket setNewTic={setNewTic}></NewTicket>}
    </div>
  );
};

export default Ticket;
