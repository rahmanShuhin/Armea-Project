import React from "react";
import Slider from "react-slick";
import { fakeData, fakeImg } from "./fakeData";
import ProductCard from "./ProductCard";
import StarRatings from "react-star-ratings";
import { useHistory } from "react-router-dom";
const NewProduct = () => {
  let history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="newProduct">
      <h2>
        Productos <span style={{ color: "#FF6606" }}>nuevos</span>{" "}
      </h2>
      <div>
        <Slider {...settings}>
          {fakeImg.slice(0, 4).map((x, index) => (
            <div className="slick__container">
              <div>
                <h2>Escritorio Montessori</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer a pretium elit
                </p>
                <StarRatings
                  rating={5}
                  starRatedColor="#ff6606"
                  numberOfStars={5}
                  name="rating"
                  starSpacing="5px"
                  starDimension="20px"
                />
                <div>
                  <button onClick={() => history.push("/product")}>
                    COMPRAR
                  </button>
                  <button>AÑADIR</button>
                </div>
              </div>
              <div>
                <img src={x} alt="" />
              </div>
              <div>
                <img src={fakeImg[index + 1]} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewProduct;