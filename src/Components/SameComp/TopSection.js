import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const TopSection = ({ h_2, spa_n, lin_K }) => {
  return (
    <div className="topSection">
      <div>
        <Link>Inicio </Link>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
        <Link>{lin_K}</Link>
      </div>
      <h2>
        {h_2} <span style={{ color: "#FF6606" }}>{spa_n}</span>
      </h2>
    </div>
  );
};

export default TopSection;
