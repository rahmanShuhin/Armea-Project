import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Dashboard = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="dashboard profile__container">
      <h2>Mis datos</h2>
      <div>
        <div>
          <h3>Mis datos de cuenta</h3>
          <button style={{ color: "#FF6606" }}>editor</button>
        </div>
        <div>
          <div>
            <label htmlFor="Usuario">Usuario</label>
            <input type="text" value={user?.name} />
          </div>
          <div>
            <label htmlFor="Usuario">Email</label>
            <input type="text" value={user?.email} />
          </div>
          <div>
            <label htmlFor="Usuario">Contraseña</label>
            <input type="text" value="*********" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3>Mis datos personales</h3>
          <button style={{ color: "#FF6606" }}>editor</button>
        </div>
        <div>
          <div>
            <label htmlFor="Usuario">Nombre</label>
            <input type="text" value="John Doe" />
          </div>
          <div>
            <label htmlFor="Usuario">Apellido</label>
            <input type="text" value="Johndoe@correo.com" />
          </div>
          <div>
            <label htmlFor="Usuario">Telefono</label>
            <input type="text" value="Ingrese su numero" />
          </div>
          <div>
            <label htmlFor="Usuario">Pais</label>
            <input type="text" value="Ingrese su numero" />
          </div>
          <div>
            <label htmlFor="Usuario">Region</label>
            <input type="text" value="Ingrese su numero" />
          </div>
        </div>
      </div>
      <div>
        <h3>Direcciones de envio</h3>
        <div>
          <textarea
            placeholder="Agregar Direccion"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
