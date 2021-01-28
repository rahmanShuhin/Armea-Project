import { Pagination } from "@material-ui/lab";
import React from "react";
import { fakeData } from "./fakeData";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  return (
    <div className="allProduct">
      <div className="allProduct__container">
        {fakeData.slice(0, 6).map((x) => (
          <ProductCard x={x}></ProductCard>
        ))}
      </div>
      <div className="allProduct__pagination">
        <Pagination count={4} />
      </div>
    </div>
  );
};

export default AllProduct;
