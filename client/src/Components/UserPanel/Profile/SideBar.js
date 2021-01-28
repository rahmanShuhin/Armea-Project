import { Avatar } from "@material-ui/core";
import React from "react";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const SideBar = () => {
  return (
    <div className="sideBar">
      <div>
        <Avatar src="https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg"></Avatar>
        <p>John doe</p>
        <small>Johndoe@correo.com</small>
      </div>
      <div className="active">
        <p>
          <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon> Compras
        </p>
      </div>
      <div>
        <p>
          <AccountCircleIcon></AccountCircleIcon> Editar datos
        </p>
      </div>
    </div>
  );
};

export default SideBar;
