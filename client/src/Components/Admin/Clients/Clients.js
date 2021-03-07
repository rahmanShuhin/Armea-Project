import React, { useState } from "react";
import AdminProfile from "../AdminProfile";
import SearchIcon from "@material-ui/icons/Search";
import ClientTable from "./ClientTable";
import clients_1 from "../../../images/clients_1.png";
import clients_2 from "../../../images/clients_2.png";
import clients_3 from "../../../images/clients_3.png";
import ClientProfile from "./ClientProfile";
const clients = [
  {
    id: 1,
    img: clients_1,
    name: "Antonio Montana",
    user: "Tony-Montana12",
    order: 12,
    amount: 129,
    aov: 1,
    email: "Correo@corre.com",
    phone: "231654",
    address: "Su casa",
    country: "Mexíco",
    city: "CDMX",
    postal: 1244,
    united: "Hace 2 años",
    total: "$212154",
  },
  {
    id: 2,
    img: clients_2,
    name: "Hector Lavoe",
    user: "elcantante82",
    order: 12,
    amount: 129,
    aov: 1,
    email: "Correo@corre.com",
    phone: "231654",
    address: "Su casa",
    country: "Mexíco",
    city: "CDMX",
    postal: 1244,
    united: "Hace 2 años",
    total: "$212154",
  },
  {
    id: 3,
    img: clients_3,
    name: "Simón Díaz",
    user: "tio.simon",
    order: 12,
    amount: 129,
    aov: 1,
    email: "Correo@corre.com",
    phone: "231654",
    address: "Su casa",
    country: "Mexíco",
    city: "CDMX",
    postal: 1244,
    united: "Hace 2 años",
    total: "$212154",
  },
];
const Clients = () => {
  const [step, setStep] = useState(false);
  return (
    <div className="clients">
      <div className="adminTop">
        <h2>Clientes</h2>
        <AdminProfile></AdminProfile>
      </div>
      {!step && (
        <div className="adminClients">
          <div>
            <div>
              <SearchIcon></SearchIcon>
              <input type="text" placeholder="Buscar clientes" />
            </div>
          </div>
          <ClientTable setStep={setStep}></ClientTable>
        </div>
      )}
      {step && <ClientProfile step={step} setStep={setStep}></ClientProfile>}
    </div>
  );
};

export default Clients;
