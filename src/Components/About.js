import React from "react";
import { Link } from "react-router-dom";
import us_1 from "../images/us_1.png";
import us_2 from "../images/us_2.png";
import us_3 from "../images/us_3.png";
import us_4 from "../images/us_4.png";
import us_5 from "../images/us_5.png";
import grid1 from "../images/grid1.png";
import grid2 from "../images/grid2.png";
import grid3 from "../images/grid3.png";
import grid4 from "../images/grid4.png";
const About = () => {
  return (
    <div className="about">
      <div>
        <div>
          <Link to="/">Inicio</Link>
          <small> {">"} </small>
          <Link>Nosotros</Link>
          <h2>
            Bienvenidos a <span style={{ color: "#FF6606" }}>ARMEA</span>, los
            mejores muebles para ti, tu familia, mascota, todo en un solo lugar
            con{" "}
            <span style={{ color: "#FF6606" }}>muebles que hacen click</span>{" "}
          </h2>
        </div>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
              ante ut est feugiat vulputate sed et mi. Cras at aliquet ligula,
              in consectetur urna. Nunc eleifend imperdiet ante.{" "}
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
              ante ut est feugiat vulputate sed et mi. Cras at aliquet ligula,
              in consectetur urna. Nunc eleifend imperdiet ante.{" "}
            </p>
          </div>
          <div>
            <div className="usImg_1">
              <img src={us_1} alt="" />
              <img src={us_3} alt="" />
            </div>
            <div className="vision">
              <h3 style={{ margin: "25px 0px" }}>Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                ante ut est feugiat vulputate sed et mi. Cras at aliquet ligula,
                in consectetur urna. Nunc eleifend imperdiet ante.{" "}
              </p>
              <div className="about__vision">
                <div>
                  <img src={grid1} alt="" />
                  <div>
                    <h3>Creamos</h3>
                    <p>Disenamos nuestros muebles</p>
                  </div>
                </div>
                <div>
                  <img src={grid2} alt="" />
                  <div>
                    <h3>Fabricamos</h3>
                    <p>Directo desde la fabrica</p>
                  </div>
                </div>
                <div>
                  <img src={grid3} alt="" />
                  <div>
                    <h3>Te ayudamos</h3>
                    <p>Consultenos</p>
                  </div>
                </div>
                <div>
                  <img src={grid4} alt="" />
                  <div>
                    <h3>Enviamos</h3>
                    <p>2/5 Dias de entrega</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="usImg_2">
            <img src={us_2} alt="" />
            <img src={us_4} alt="" />
          </div>
        </div>
        <div>
          <div className="vision__list">
            <h2>
              En <span style={{ color: "#FF6606" }}>ARMEA</span> encontrarás
            </h2>
            <ul>
              <li>
                <span className="diff">Calidad: </span> de nuestros muebles.
              </li>
              <li>
                <span className="diff">Precio: </span> directos de fabrica sin
                intermediarios.
              </li>
              <li>
                <span className="diff">Diseño: </span> diseñamos nuestros
                muebles, siguiendo las últimas tendencias del mercado
              </li>
              <li>
                <span className="diff">Servicio: </span> recibes los muebles en
                casa en poco tiempo.
              </li>
              <li>
                <span className="diff">Cercanía: </span> atención personalizada
                antes, durante y después de la venta.
              </li>
            </ul>
          </div>
          <div>
            <img src={us_5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
