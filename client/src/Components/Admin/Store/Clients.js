import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ClientTable from "./ClientTable";
const Clients = () => {
  return (
    <div className="adminClients">
      <div>
        <div>
          <SearchIcon></SearchIcon>
          <input type="text" placeholder="Buscar clientes" />
        </div>
      </div>
      <ClientTable></ClientTable>
    </div>
  );
};

export default Clients;
