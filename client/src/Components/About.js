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
          <div className="vision">
            <h3 style={{ margin: "95px 0px 20px 0px" }}>Misión</h3>
            <p>
              Brindar soluciones innovadoras al cliente en cuanto a mobiliario,
              por medio dela experiencia “ármelo usted mismo”, que cumplan
              satisfacer sus necesidades tanto funcionales como decorativas; a
              precios bajos, confiando en las habilidades y capacidades de
              nuestro personal para así garantizar la durabilidad y calidad de
              nuestro mobiliario.
            </p>
          </div>
          <div>
            <img src={us_2} alt="" />
          </div>
        </div>
      </div>
      <div>
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
      <div className="about__duplicate">
        <div>
          <img src={us_3} alt="" />
        </div>
        <div style={{ padding: "0px 80px" }}>
          <div className="vision">
            <h3>Visión</h3>
            <p style={{ padding: "10px 0px" }}>
              Ser el líder en el mercado nacional de muebles bajo el concepto
              “ármelo usted mismo”, conceptualizando diseños innovadores de alta
              calidad y al mismo tiempo funcionales, con precios accesibles,
              apoyándonos en nuestro equipo de trabajo y en la más alta
              tecnología que se encuentre a nuestro alcance.
            </p>
          </div>
          <div className="vision__list">
            <h2>
              En <span style={{ color: "#FF6606" }}>ARMEA</span> encontrarás
            </h2>
            <ul>
              <li>
                <span className="diff">Innovación </span>
              </li>
              <li>
                <span className="diff">Compromiso</span>
              </li>
              <li>
                <span className="diff">Trabajo en equipo</span>
              </li>
              <li>
                <span className="diff">Integridad </span>
              </li>
              <li>
                <span className="diff">Atención al servicio</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about__duplicate">
        <div>
          <img src={us_3} alt="" />
        </div>
        <div>
          <img src={us_3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
