import React, { useState } from "react";
import AllProduct from "./AllProduct";
import { background } from "./Background";
import SideBox from "./SideBox";
const Shop = () => {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [search, setSearch] = useState(null);
  const [catg, setCatg] = useState(null);
  const [catgTypes, setCatgTypes] = useState({
    Escritorio: false,
    Sofa: false,
    Silla: false,
    Comoda: false,
    Biblioteca: false,
  });
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
        <h2>
          Tienda de <span style={{ color: "#FF6606" }}>mueble</span>{" "}
        </h2>
      </div>
      <div className="shop__container">
        <SideBox
          setMin={setMin}
          setMax={setMax}
          setSearch={setSearch}
          setCatg={setCatg}
          catgTypes={catgTypes}
          setCatgTypes={setCatgTypes}
        ></SideBox>
        <AllProduct
          min={min}
          max={max}
          search={search}
          catgTypes={catgTypes}
        ></AllProduct>
      </div>
    </div>
  );
};

export default Shop;
