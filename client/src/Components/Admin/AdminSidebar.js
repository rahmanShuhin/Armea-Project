import React from "react";
import admin_logo from "../../images/admin_logo.png";
import dash_icon from "../../images/dash_icon.png";
import ticket_icon from "../../images/ticket_icon.png";
import light_icon from "../../images/light_icon.png";
import category_logo from "../../images/category_logo.png";
import products_logo from "../../images/products_logo.png";
import coupon_logo from "../../images/coupon_logo.png";
import setting_logo from "../../images/setting_logo.png";
import client_logo from "../../images/client_logo.png";
import Hamburger_logo from "../../images/Hamburger_logo.png";
import report_logo from "../../images/report_logo.png";
import blog_logo from "../../images/blog_logo.png";
import home_logo from "../../images/home_logo.png";
import post_logo from "../../images/post_logo.png";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import TreeItem from "@material-ui/lab/TreeItem";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
const AdminSidebar = ({ step, setStep }) => {
  const classes = useStyles();
  return (
    <div className="adminSide">
      <div>
        <img src={admin_logo} alt="" />
      </div>
      <div className="button">
        <div className={step === 1 && "active"} onClick={() => setStep(1)}>
          <img src={dash_icon} alt="" />
          Tablero
        </div>

        <div className={step === 2 && "active"} onClick={() => setStep(2)}>
          <img src={category_logo} alt="" />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="1" label="Categorías">
              <div>Nueva Categoría</div>
              <div>Todas las Categorías</div>
            </TreeItem>
          </TreeView>
        </div>

        {/* <div className={step === 2 && "active"} onClick={() => setStep(2)}>
          <img src={category_logo} alt="" />
          Categorías
        </div> */}
        <div className={step === 3 && "active"} onClick={() => setStep(3)}>
          <img src={products_logo} alt="" />
          Productos
        </div>
        <div className={step === 4 && "active"} onClick={() => setStep(3)}>
          <img src={coupon_logo} alt="" />
          Cupones
        </div>
        <div className={step === 5 && "active"} onClick={() => setStep(3)}>
          <img src={client_logo} alt="" />
          Clientes
        </div>
        <div className={step === 6 && "active"} onClick={() => setStep(3)}>
          <img src={Hamburger_logo} alt="" />
          Pedidos
        </div>
        <div className={step === 7 && "active"} onClick={() => setStep(3)}>
          <img src={report_logo} alt="" />
          Reportes de Ventas
        </div>
        <div className={step === 8 && "active"} onClick={() => setStep(3)}>
          <img src={blog_logo} alt="" />
          Blog
        </div>
        <div className={step === 9 && "active"} onClick={() => setStep(3)}>
          <img src={home_logo} alt="" />
          Configurar Home
        </div>
        {/* <div className={step === 2 && "active"} onClick={() => setStep(2)}>
          <img src={ticket_icon} alt="" />
          Entradas
        </div> */}
        {/* <div className={step === 3 && "active"} onClick={() => setStep(3)}>
          <img src={light_icon} alt="" />
          Tienda
        </div> */}
        <div className={step === 5 && "active"} onClick={() => setStep(5)}>
          <img src={post_logo} alt="" />
          Correos
        </div>
        <div className={step === 11 && "active"} onClick={() => setStep(4)}>
          <img src={setting_logo} alt="" />
          Ajustes
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
