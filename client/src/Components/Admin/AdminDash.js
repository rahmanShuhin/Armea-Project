import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
const AdminDash = () => {
  return (
    <div className="adminDash">
      <h2>Tablero</h2>
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
