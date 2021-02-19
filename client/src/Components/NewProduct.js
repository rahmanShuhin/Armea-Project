import React from "react";
import Slider from "react-slick";
import { fakeData, fakeImg } from "./fakeData";
import ProductCard from "./ProductCard";
import StarRatings from "react-star-ratings";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./actions/index";

const NewProduct = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => console.log("slides change"),
    // beforeChange: (current, next) => alert(next),
  };
  const handleAddToCart = () => {};
  return (
    <div className="newProduct">
      <h2>
        Productos <span style={{ color: "#FF6606" }}>nuevos</span>{" "}
      </h2>
      <div>
        <div className="newProduct__left">
          <h2>Escritorio Montessori</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
            pretium elit
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
            <button
              onClick={() => {
                history.push("/checkout");
                dispatch(addToCart("1"));
              }}
            >
              COMPRAR
            </button>
            <button onClick={() => dispatch(addToCart("1"))}>AÑADIR</button>
          </div>
        </div>
        <div className="slick__container">
          <Slider {...settings}>
            {fakeData.slice(0, 4).map((x, index) => (
              <div className="slick__inner">
                <div>
                  <img src={x.img} alt="" />
                </div>
                <div>
                  <img src={fakeData[index + 1].img} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
