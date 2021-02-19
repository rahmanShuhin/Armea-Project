import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
const ProductCard = ({ x }) => {
  return (
    <div className="productCard">
      <img src={x.img} alt="" />
      <StarRatings
        rating={5}
        starRatedColor="#ff6606"
        numberOfStars={5}
        name="rating"
        starSpacing="5px"
        starDimension="20px"
      />
      <p>{x.productName}</p>
      <p>${x.price}</p>
      <div>
        <Link className="btn__details" to={`/product/${x.id}`}>
          DETALLES
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
