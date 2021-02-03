import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { fakeData, fakeImg } from "./fakeData";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import StarRatings from "react-star-ratings";
import thumbnail_1 from "../images/thumbnail_1.png";
import thumbnail_2 from "../images/thumbnail_2.png";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Timer from "react-compound-timer";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const ProductDetails = () => {
  const [img, setImg] = useState(0);
  const handleForward = () => {
    if (img !== fakeImg.length - 1) {
      setImg(img + 1);
    }
  };
  const handleBack = () => {
    if (img !== 0) {
      setImg(img - 1);
    }
  };
  return (
    <div>
      <div className="offer_timer">
        <div>
          <p>
            <span style={{ fontWeight: "bold" }}>Escritorio Montessori </span>{" "}
            actualmente se encuentra en una oferta especial de 12% de descuento{" "}
          </p>
          <Timer initialTime={172800000} direction="backward">
            {() => (
              <React.Fragment>
                <span>la oferta termina en: </span>
                <Timer.Days /> <span>dias, </span>
                <Timer.Hours /> <span>horas, </span>
                <Timer.Minutes /> <span>minutos.</span>
              </React.Fragment>
            )}
          </Timer>
        </div>
      </div>
      <div className="productDetails">
        <div>
          <Link className="blog__title" to="/shop">
            {" "}
            <ArrowBackIcon></ArrowBackIcon>Regresar a la Tienda
          </Link>
        </div>
        <div className="productDetails__top">
          <div>
            <div>
              <div>
                {fakeImg.map((x, index) => {
                  if (index !== img) {
                    return <img src={x} alt="" onClick={() => setImg(index)} />;
                  } else {
                    return <></>;
                  }
                })}
              </div>
              <div>
                <button
                  className={img === 0 && "disable-btn"}
                  onClick={handleBack}
                >
                  <ArrowBackIosIcon></ArrowBackIosIcon>
                </button>
                <img src={fakeImg[img]} alt="" />
                <button
                  onClick={handleForward}
                  className={img === fakeImg.length - 1 && "disable-btn"}
                >
                  <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>
                Escritorio Montessori <FavoriteBorderIcon></FavoriteBorderIcon>
              </h2>

              <StarRatings
                rating={5}
                starRatedColor="#ff6606"
                numberOfStars={5}
                name="rating"
                starSpacing="5px"
                starDimension="20px"
              />
              <small>10 opiniones</small>
              <div className="discount_box">
                <small>
                  <del>$1488</del>
                  &nbsp;Ahorras 12% con esta oferta
                </small>
              </div>
              <div className="price_box">
                <h3>$999</h3>
                {/* <div>
                  <button>+</button>
                  <p>1</p>
                  <button>-</button>
                </div> */}
                <button>Comparar precio</button>
              </div>
              <p>Descripción</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                a pretium elit, sed efficitur enim. Quisque fermentum fermentum
                lectus. Nullam laoreet ante odio, non commodo ante pellentesque
                ut. Nullam mollis dictum erat.
              </p>
              <div className="price_box">
                <div className="color__box">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div>
                  <button>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                  </button>
                  <p>1 Unidad</p>
                  <button>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </button>
                </div>
              </div>
              <div className="button__box">
                <button>COMPRAR</button>
                <button>ELIMINAR</button>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ color: "#FF6606", marginBottom: "20px" }}>
              ArmeaCombos
            </h2>
            <div className="productCombo">
              <div>
                <img src={fakeImg[0]} alt="" />
                <StarRatings
                  rating={5}
                  starRatedColor="#ff6606"
                  numberOfStars={5}
                  name="rating"
                  starSpacing="2px"
                  starDimension="20px"
                />
                <p>Escritorio Montessori</p>
              </div>
              <p>+</p>
              <div>
                <img src={fakeImg[0]} alt="" />
                <StarRatings
                  rating={5}
                  starRatedColor="#ff6606"
                  numberOfStars={5}
                  name="rating"
                  starSpacing="2px"
                  starDimension="20px"
                />
                <p>Escritorio Montessori</p>
              </div>
              <div>
                <h4>
                  <small style={{ fontWeight: "normal" }}>Precio:</small> 1997$
                  <span style={{ color: "#FF7E2E " }}>-30%</span>
                </h4>
                <button>COMPRAR</button>
                <button>AÑADIR</button>
              </div>
            </div>
            <div className="productDetails__card">
              <div>
                <h2>Beneficios</h2>
                <p>
                  Ideal para tener en casa y que los pequeños puedan realizar
                  sus actividades escolares de homeschooling.
                </p>
                <p>
                  Ideal para tener en casa y que los pequeños puedan realizar
                  sus actividades escolares de homeschooling.
                </p>
              </div>
              <div>
                <h2>Estructura y armado</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer a pretium elit, sed efficitur enim. Quisque fermentum
                  fermentum lectus. Nullam laoreet ante odio, non commodo ante
                  pellentesque ut. Nullam mollis dictum erat.
                </p>
              </div>
              <div className="thumbnail">
                <div>
                  <img src={thumbnail_1} alt="" />
                </div>
                <div>
                  <img src={thumbnail_2} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <h2>Preguntas frecuentes</h2>
                  <p>Ver preguntas</p>
                </div>
                <p>Información de envío</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                  lacus, in vehicula nisi
                </p>
                <p>¿Dónde fabrican los muebles?</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                  lacus, in vehicula nisi{" "}
                </p>
                <p>¿Cuánto cuesta el envío?</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque a pellentesque tellus. Vestibulum eu pharetra
                  lacus, in vehicula nisi
                </p>
              </div>
            </div>
          </div>
          <div className="productDetails__rating">
            <h2 className="h2">Calificación de este producto</h2>
            <div>
              <div>
                <h2>5.0</h2>
                <StarRatings
                  rating={5}
                  starRatedColor="#ff6606"
                  numberOfStars={5}
                  name="rating"
                  starSpacing="5px"
                  starDimension="20px"
                />
              </div>
              <div className="review__box">
                <div>
                  <small>5 estrellas </small>
                  <div></div>
                </div>
                <div>
                  <small>5 estrellas </small>
                  <div></div>
                </div>
                <div>
                  <small>5 estrellas </small>
                  <div></div>
                </div>
                <div>
                  <small>5 estrellas </small>
                  <div></div>
                </div>
                <div>
                  <small>5 estrellas </small>
                  <div></div>
                </div>
              </div>
            </div>
            <div>
              <h3>Reseñas de clientes</h3>
              <div>
                <div>
                  <h3>Hermoso!</h3>
                  <StarRatings
                    rating={5}
                    starRatedColor="#ff6606"
                    numberOfStars={5}
                    name="rating"
                    starSpacing="5px"
                    starDimension="20px"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget scelerisque enim, at faucibus lectus. In hac habitasse
                  platea dictumst
                </p>
              </div>
              <div>
                <div>
                  <h3>Excelente</h3>
                  <StarRatings
                    rating={5}
                    starRatedColor="#ff6606"
                    numberOfStars={5}
                    name="rating"
                    starSpacing="5px"
                    starDimension="20px"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget scelerisque enim, at faucibus lectus. In hac habitasse
                  platea dictumst
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="productDetails__similar">
          <h2>Productos </h2>
          <div>
            {fakeData.slice(0, 4).map((x) => (
              <ProductCard x={x}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
