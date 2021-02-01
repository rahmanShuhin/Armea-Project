import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { fakeData } from "./fakeData";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [val, setVal] = useState(1);
  useEffect(() => {
    setProducts(fakeData.slice(0, 6));
  }, []);
  const handleChange = (event, value) => {
    setVal(value);
  };
  useEffect(() => {
    const num1 = (val - 1) * 6;
    const num2 = val * 6;
    setProducts(fakeData.slice(num1, num2));
  }, [val]);
  return (
    <div className="allProduct">
      <div className="allProduct__container">
        {products.map((x) => (
          <ProductCard x={x}></ProductCard>
        ))}
      </div>
      <div className="allProduct__pagination">
        <Pagination
          page={val}
          count={Math.ceil(fakeData.length / 6)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AllProduct;
