import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div></div>
      <div>
        <div>
          <h2 className="contact__title">Contacto</h2>
          <p>Atenderemos cualquier problema o comentario que tengas</p>
          <form>
            <div>
              <div>
                <label htmlFor="number">Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" />
              </div>
              <div>
                <label htmlFor="number">Apellido</label>
                <input type="text" placeholder="Ingrese su apellido" />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Ingrese su email" />
            </div>
            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Escriba su mensaje"
              ></textarea>
            </div>
            <div className="form_btn">
              <button type="submit">ENVIAR</button>
            </div>
          </form>
        </div>
        <div>
          <div>
            <h2 className="blog__title">
              ¿En qué podemos{" "}
              <span style={{ color: "#FF6606" }}>&nbsp;ayudarte </span> ?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi. Phasellus tempus magna semper nunc mattis
              cursus. Praesent rutrum imperdiet semper. Aenean mollis eros
              massa, eget aliquet dolor pharetra eu. Etiam vel arcu mi.
            </p>
          </div>
          <div>
            <p>Información de envío</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi
            </p>
            <p>¿Dónde fabrican los muebles?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi
            </p>
            <p>¿Cuánto cuesta el envío?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a pellentesque tellus. Vestibulum eu pharetra lacus,
              in vehicula nisi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
