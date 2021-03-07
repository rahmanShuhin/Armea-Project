import React from "react";
import clients_1 from "../../../images/clients_1.png";
import clients_2 from "../../../images/clients_2.png";
import clients_3 from "../../../images/clients_3.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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
const ClientProfile = ({ setStep }) => {
  return (
    <div className="clientProfile">
      <div>
        <button onClick={() => setStep(false)}>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <small>Cliente</small>
      </div>
    </div>
  );
};

export default ClientProfile;
