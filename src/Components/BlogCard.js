import React from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
const BlogCard = ({ x }) => {
  return (
    <div className="blogCard">
      <img src={x.img} alt="" />
      <div>
        <h2>{x.name}</h2>
        <p>{x.blog}</p>
        <div>
          <div>
            <DateRangeIcon></DateRangeIcon>
            <p>12-10-2021</p>
          </div>
          <div>
            <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
            <p>{x.author}</p>
          </div>
        </div>
        <button>LEER MAS</button>
      </div>
    </div>
  );
};

export default BlogCard;
