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

        {/* step 2,3,4 */}
        <div
          className={(step === 2 || step === 3 || step === 4) && "active"}
          onClick={() => setStep(2)}
        >
          <img src={category_logo} alt="" />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="1" label="Categorías">
              <div onClick={() => setStep(3)}>Nueva Categoría</div>
              <div onClick={() => setStep(4)}>Todas las Categorías</div>
            </TreeItem>
          </TreeView>
        </div>

        {/* step 5,6,7 */}
        <div
          className={(step === 5 || step === 6 || step === 7) && "active"}
          onClick={() => setStep(5)}
        >
          <img src={products_logo} alt="" />

          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="2" label="Productos">
              <div onClick={() => setStep(6)}>Nuevo Producto</div>
              <div onClick={() => setStep(7)}>Todos los productos</div>
            </TreeItem>
          </TreeView>
        </div>

        {/* step 8,9,10 */}
        <div
          className={(step === 8 || step === 9 || step === 10) && "active"}
          onClick={() => setStep(3)}
        >
          <img src={coupon_logo} alt="" />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="9" label="Cupones">
              <div onClick={() => setStep(9)}>Nuevo Cupón</div>
              <div onClick={() => setStep(10)}>Todos los Cupones</div>
            </TreeItem>
          </TreeView>
        </div>

        {/* step 11 */}
        <div className={step === 11 && "active"} onClick={() => setStep(11)}>
          <img src={client_logo} alt="" />
          Clientes
        </div>

        {/* step 12 13 14 15 16 17 18  */}
        <div
          className={step >= 12 && step <= 18 && "active"}
          onClick={() => setStep(12)}
        >
          <img src={Hamburger_logo} alt="" />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="9" label="Pedidos">
              <div onClick={() => setStep(13)}>Todos las Pedidos</div>
              <div onClick={() => setStep(14)}>Pendientes</div>
              <div onClick={() => setStep(15)}>Pagado</div>
              <div onClick={() => setStep(16)}>En Proceso</div>
              <div onClick={() => setStep(17)}>Enviados</div>
              <div onClick={() => setStep(18)}>Entregados</div>
            </TreeItem>
          </TreeView>
        </div>

        {/* step 19 */}
        <div className={step === 19 && "active"} onClick={() => setStep(19)}>
          <img src={report_logo} alt="" />
          Reportes de Ventas
        </div>

        {/* step 20 21 22 */}
        <div
          className={(step === 20 || step === 21 || step === 22) && "active"}
          onClick={() => setStep(20)}
        >
          <img src={blog_logo} alt="" />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="9" label="Blog">
              <div onClick={() => setStep(21)}>Nueva Entrada</div>
              <div onClick={() => setStep(22)}>Todas las Entradas</div>
            </TreeItem>
          </TreeView>
        </div>

        {/* step 23 24 25 */}
        <div
          className={step >= 23 && step <= 25 && "active"}
          onClick={() => setStep(23)}
        >
          <img src={home_logo} alt="" />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="9" label="Configurar Home">
              <div onClick={() => setStep(24)}>Slider</div>
              <div onClick={() => setStep(25)}>Nuevos Productos</div>
            </TreeItem>
          </TreeView>
        </div>

        {/* step 26 27 28 */}
        <div
          className={step >= 26 && step <= 28 && "active"}
          onClick={() => setStep(26)}
        >
          <img src={post_logo} alt="" />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="10" label="Correos">
              <div onClick={() => setStep(27)}>Nuevo Correo</div>
              <div onClick={() => setStep(28)}>Todos los Correos</div>
            </TreeItem>
          </TreeView>
        </div>

        {/* step 29 30 31 */}
        <div
          className={step >= 29 && step <= 33 && "active"}
          onClick={() => setStep(29)}
        >
          <img src={setting_logo} alt="" />

          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
            defaultExpandIcon={<ExpandMoreIcon />}
          >
            <TreeItem nodeId="11" label="Ajustes">
              <div onClick={() => setStep(30)}>Métodos de Envío</div>
              <div onClick={() => setStep(31)}>Integraciones</div>
              <div onClick={() => setStep(32)}>Pop Up</div>
              <div onClick={() => setStep(33)}>Sitio Mantenimiento</div>
            </TreeItem>
          </TreeView>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
