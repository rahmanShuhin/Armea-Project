import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ClientTable from "../Clients/ClientTable";

const Clients = () => {
  return (
    <div className="adminClients">
      <div>
        <div>
          <div>
            <SearchIcon></SearchIcon>
            <input type="text" placeholder="Buscar clientes" />
          </div>
        </div>
        <ClientTable></ClientTable>
      </div>
    </div>
  );
};

export default Clients;
