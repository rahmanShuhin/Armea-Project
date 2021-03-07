import React, { useEffect, useState } from "react";
import clients_1 from "../../../images/clients_1.png";
import clients_2 from "../../../images/clients_2.png";
import clients_3 from "../../../images/clients_3.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ClientProfileTable from "./ClientProfileTable";
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
const ClientProfile = ({ setStep, step }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const arr = clients.find((x) => x.id === step);
    setUser(arr);
  }, []);
  console.log(user);
  return (
    <div className="clientProfile">
      <div>
        <button onClick={() => setStep(false)}>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <small>Cliente</small>
      </div>
      <div className="clientProfile__top">
        <img src={user?.img} alt="" />
        <div>
          <div>
            <p>ID</p>
            <p>{user?.id}</p>
          </div>
          <div>
            <p>Nombre</p>
            <p>{user?.name}</p>
          </div>
          <div>
            <p>Correo</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p>Teléfono</p>
            <p>{user?.phone}</p>
          </div>
          <div>
            <p>Dirección</p>
            <p>{user?.address}</p>
          </div>
          <div>
            <p>País</p>
            <p>{user?.country}</p>
          </div>
        </div>

        <div>
          <div>
            <p>Ciudad</p>
            <p>{user?.city}</p>
          </div>
          <div>
            <p>Código Postal</p>
            <p>{user?.postal}</p>
          </div>
          <div>
            <p>Unido</p>
            <p>{user?.united}</p>
          </div>
          <div>
            <p>Importe Total</p>
            <p>{user?.total}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: "20px" }}>Pedidos del cliente</h3>
        <ClientProfileTable></ClientProfileTable>
      </div>
    </div>
  );
};

export default ClientProfile;
