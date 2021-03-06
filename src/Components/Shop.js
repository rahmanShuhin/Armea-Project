import React, { useState } from "react";
import AllProduct from "./AllProduct";
import { background } from "./Background";
import SideBox from "./SideBox";
const Shop = () => {
  const [count, setCount] = useState(0);
  setTimeout(() => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 5000);

  return (
    <div className="shop">
      <div
        className="shop__banner"
        style={{ backgroundImage: `url(${background[count].img})` }}
      >
        <div>
          <h2>{background[count].text}</h2>
        </div>
      </div>
      <div className="shop__head">
        <h2>Tienda de</h2>
      </div>
      <div className="shop__container">
        <SideBox></SideBox>
        <AllProduct></AllProduct>
      </div>
    </div>
  );
};

export default Shop;
