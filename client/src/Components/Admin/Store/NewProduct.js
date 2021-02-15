import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const NewProduct = ({ setShowNew }) => {
  return (
    <div className="adminNewProduct">
      <div className="adminNewProduct__top">
        <button onClick={() => setShowNew(false)}>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <h3>Nueva entrada</h3>
      </div>
      <div className="adminNewProduct__top"></div>
    </div>
  );
};

export default NewProduct;
