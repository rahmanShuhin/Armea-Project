import React from "react";
import grid1 from "../images/grid1.png";
import grid2 from "../images/grid2.png";
import grid3 from "../images/grid3.png";
import grid4 from "../images/grid4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  console.log(props);
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const HighProducts = () => {
  const settings = {
    dots: false,
    focusOnSelect: false,
    infinite: true,
    swipe: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="highProduct">
      <div className="highProduct__top">
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
      <div className="highProduct__slider">
        <div>
          <h2>
            Productos de alta <span style={{ color: "#FF6606" }}>calidad</span>{" "}
          </h2>
        </div>
        <div className="swiper__box">
          <Slider {...settings} onChange={() => alert()}>
            <div className="children__product">
              <div>
                <div>
                  <p>Categoria</p>
                  <p>niños</p>
                </div>
                <Link to="/shop">
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Link>
              </div>
            </div>
            <div className="decor__product">
              <div>
                <div>
                  <p>Categoria</p>
                  <p>Decoración</p>
                </div>
                <Link to="/shop">
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Link>
              </div>
            </div>
            <div className="pet__product">
              <div>
                <div>
                  <p>Categoria</p>
                  <p>Mascotas</p>
                </div>
                <Link to="/shop">
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Link>
              </div>
            </div>
            <div className="desk__product">
              <div>
                <div>
                  <p>Categoria</p>
                  <p>Escritorios</p>
                </div>
                <Link>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
        <div>
          <Link className="btn" to="/shop">
            IR A LA TIENDA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighProducts;
