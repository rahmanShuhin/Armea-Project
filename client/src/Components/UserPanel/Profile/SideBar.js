import { Avatar } from "@material-ui/core";
import React from "react";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const SideBar = ({ setShow, show }) => {
  const handleState = (i) => {
    setShow(i);
  };
  return (
    <div className="sideBar">
      <div onClick={() => handleState(1)} className={show === 1 && "active"}>
        <Avatar src="https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg"></Avatar>
        <p>John doe</p>
        <small>Johndoe@correo.com</small>
      </div>
      <div className={show === 2 && "active"} onClick={() => handleState(2)}>
        <p>
          <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon> Compras
        </p>
      </div>
      <div onClick={() => handleState(3)} className={show === 3 && "active"}>
        <p>
          <AccountCircleIcon></AccountCircleIcon> Editar datos
        </p>
      </div>
    </div>
  );
};

export default SideBar;
