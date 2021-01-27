import { Avatar } from "@material-ui/core";
import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const SideBar = () => {
  return (
    <div className="sideBar">
      <div>
        <Avatar></Avatar>
        <p>John doe</p>
        <small>Johndoe@correo.com</small>
      </div>
      <div>
        <p>
          {" "}
          <ShoppingBasketIcon></ShoppingBasketIcon>Compras
        </p>
      </div>
      <div>Editar datos</div>
    </div>
  );
};

export default SideBar;
