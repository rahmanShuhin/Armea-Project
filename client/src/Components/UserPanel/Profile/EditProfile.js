import React from "react";

const EditProfile = () => {
  return (
    <div className="profile__container editProfile">
      <h2>Editar datos</h2>
      <div>
        <h3>Modificar usuario</h3>
        <div>
          <div>
            <label htmlFor="Usuario">Usuario actual</label>
            <input type="text" defaultValue="John Doe" />
          </div>
          <div>
            <label htmlFor="Usuario">Nuevo usuario</label>
            <input type="text" defaultValue="John Doe 2" />
          </div>
        </div>
        <button>MODIFICAR</button>
      </div>

      <div>
        <h3>Cambiar contraseña</h3>
        <div>
          <div>
            <label htmlFor="Usuario">Contraseña actuall</label>
            <input type="password" defaultValue="******" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="Usuario">Nueva contraseña</label>
            <input type="password" defaultValue="**********" />
          </div>
          <div>
            <label htmlFor="Usuario">Nuevo usuario</label>
            <input type="password" defaultValue="**********" />
          </div>
        </div>
        <button>MODIFICAR</button>
      </div>

      <div>
        <h3>Cambiar email</h3>
        <div>
          <label htmlFor="">Nuevo correo</label>
          <div>
            <input type="text" placeholder="johndoe@correo.com" />
            <button>MODIFICAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
