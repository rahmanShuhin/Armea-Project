import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AdminProfile from "./AdminProfile";
import AdminChart from "./AdminChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 66;

const AdminDash = () => {
  return (
    <div className="adminDash">
      <div className="adminTop">
        <h2>Tablero</h2>
        <AdminProfile></AdminProfile>
      </div>
      <div>
        <div className="adminDash__title">
          <h3>Performance</h3>
          <small>Ultimos 7 dias</small>
        </div>
        <div className="adminDash__top">
          <div>
            <div>
              <small>VEntas completadas</small>
              <h3>240</h3>
              <small className="small__arrow">
                <ArrowDropDownIcon></ArrowDropDownIcon> 12% Esta semana
              </small>
            </div>
            <CheckCircleIcon></CheckCircleIcon>
          </div>
          <div>
            <div>
              <small>VEntas CANCELADAS</small>
              <h3>240</h3>
              <small className="small__arrow">
                <ArrowDropDownIcon></ArrowDropDownIcon> 12% Esta semana
              </small>
            </div>
            <CancelIcon></CancelIcon>
          </div>
          <div>
            <div>
              <small>VEntas completadas</small>
              <h3>240</h3>
              <small className="small__arrow">
                <ArrowDropDownIcon></ArrowDropDownIcon> 12% Esta semana
              </small>
            </div>
            <AccountCircleIcon></AccountCircleIcon>
          </div>
          <div>
            <div>
              <small>USUARIOS ACTIVOS</small>
              <h3>240</h3>
              <small className="small__arrow">
                <ArrowDropDownIcon></ArrowDropDownIcon> 12% Esta semana
              </small>
            </div>
            <ExpandLessIcon></ExpandLessIcon>
          </div>
        </div>
      </div>
      <div className="chartContainer">
        <div className="adminChart">
          <div className="adminDash__title">
            <small>Ventas de la tienda</small>
            <h2 style={{ margin: "0px 10px" }}>19283$</h2>
            <small className="small__arrow__2">
              <ArrowDropDownIcon></ArrowDropDownIcon> 12%
            </small>
            <small>Esta semana</small>
            <small style={{ marginLeft: "auto" }} className="small__arrow__3">
              Ultimos 7 dias <ArrowDropDownIcon></ArrowDropDownIcon>
            </small>
          </div>
          <div>
            <div>
              <AdminChart></AdminChart>
            </div>
          </div>
        </div>
        <div>
          <p style={{ padding: "20px" }}>Visitas</p>
          <hr />
          <div style={{ textAlign: "center", padding: "20px" }}>
            <CircularProgressbar
              value={percentage}
              text={`182`}
              styles={buildStyles({
                textColor: "black",
                textAlign: "center",
                textSize: "30px",
                pathColor: "#1070CA",
                trailColor: "#F7D154",
              })}
            />
          </div>
          <div style={{ padding: "20px", display: "flex" }}>
            <div style={{ marginRight: "10px" }}>
              <small>No regisbtrados</small>
              <h3 style={{ color: "#1070CA" }}>63%</h3>
            </div>
            <div>
              <small>Registrados</small>
              <h3 style={{ color: "#F7D154" }}>15%</h3>
            </div>
          </div>
          <hr />
          <p style={{ padding: "20px" }}>Ultimos 7 dias</p>
        </div>
      </div>
      <div>
        <div className="adminDash__title">
          <h3>Ventas tienda</h3>
          <small>Ultimos 7 dias</small>
        </div>
        <div className="adminDash__store">
          <div>
            <div>
              <div>
                <p>productos</p>
                <h3>240</h3>
              </div>
              <small>CATEGORIAS</small>
              <AddCircleIcon></AddCircleIcon>
            </div>
            <div>
              <div>
                <small>Muebles </small>
                <h4>60</h4>
              </div>
              <div>
                <small>Mascotas</small>
                <h4>60</h4>
              </div>
              <div>
                <small>Niños </small>
                <h4>60</h4>
              </div>
              <div>
                <small>Decoración</small>
                <h4>60</h4>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>Informes</p>
                <h3>240</h3>
              </div>
              <small>Historia</small>
              <AddCircleIcon></AddCircleIcon>
            </div>
            <div>
              <div>
                <small>Semanal </small>
                <h4>60</h4>
              </div>
              <div>
                <small>Mensual</small>
                <h4>60</h4>
              </div>
              <div>
                <small>Trimestral</small>
                <h4>60</h4>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>pedidos</p>
                <h3>12</h3>
              </div>
              <small>Estado</small>
            </div>
            <div>
              <div>
                <small>Activos</small>
                <h4>
                  2 <QueryBuilderIcon></QueryBuilderIcon>
                </h4>
              </div>
              <div>
                <small>Finalizados </small>
                <h4>
                  8{" "}
                  <CheckCircleIcon
                    style={{ color: "#47B881" }}
                  ></CheckCircleIcon>{" "}
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>clientes</p>
                <h3>2400</h3>
              </div>
              <small>Historia</small>
              <AddCircleIcon></AddCircleIcon>
            </div>
            <div>
              <div>
                <small>Nuevos</small>
                <h4>60</h4>
              </div>
              <div>
                <small>Recurrentes</small>
                <h4>60</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div>
        <div className="adminDash__title">
          <h3>Entradas del Blog</h3>
          <small>Ultimos 7 dias</small>
        </div>
        <div className="adminDash__bottom">
          <div>
            <div>
              <small>Entradas nuevas</small>
              <h3>
                240<AddCircleIcon></AddCircleIcon>{" "}
              </h3>
              <small className="small__arrow">
                <ArrowDropDownIcon></ArrowDropDownIcon> 12% Esta semana
              </small>
            </div>
          </div>
          <div>
            <div>
              <small>entradas eliminadas</small>
              <h3>
                240 <CancelIcon></CancelIcon>
              </h3>
              <small className="small__arrow">
                <ArrowDropDownIcon></ArrowDropDownIcon> 12% Esta semana
              </small>
            </div>
          </div>
          <div>
            <div>
              <small>VEntas completadas</small>
              <h3>240</h3>
              <small className="small__arrow">
                <ArrowDropDownIcon></ArrowDropDownIcon> 12% Esta semana
              </small>
            </div>
          </div>
          <div>
            <div>
              <small>USUARIOS ACTIVOS</small>
              <h3>240</h3>
              <small className="small__arrow">
                <ArrowDropDownIcon></ArrowDropDownIcon> 12% Esta semana
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
