import React from "react";
import Slider from "react-slick";
import blogPost1 from "../images/blogPost1.png";
import blogPost from "../images/blogPost.png";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
const BlogSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="blogSlide">
      <h2>Nuestro </h2>
      <div className="slick__box">
        <Slider {...settings}>
          <div className="slick__container">
            <img src={blogPost1} alt="" />
            <div>
              <h3>Muebles para tu felicidad</h3>
              <div>
                <div>
                  <DateRangeIcon></DateRangeIcon>
                  <p>12-10-2021</p>
                </div>
                <div>
                  <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                  <p>John Doe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slick__container">
            <img src={blogPost} alt="" />
            <div>
              <h3>Muebles para tu felicidad</h3>
              <div>
                <div>
                  <DateRangeIcon></DateRangeIcon>
                  <p>12-10-2021</p>
                </div>
                <div>
                  <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                  <p>John Doe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slick__container">
            <img src={blogPost} alt="" />
            <div>
              <h3>Muebles para tu felicidad</h3>
              <div>
                <div>
                  <DateRangeIcon></DateRangeIcon>
                  <p>12-10-2021</p>
                </div>
                <div>
                  <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                  <p>John Doe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slick__container">
            <img src={blogPost1} alt="" />
            <div>
              <h3>Muebles para tu felicidad</h3>
              <div>
                <div>
                  <DateRangeIcon></DateRangeIcon>
                  <p>12-10-2021</p>
                </div>
                <div>
                  <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                  <p>John Doe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slick__container">
            <img src={blogPost} alt="" />
            <div>
              <h3>Muebles para tu felicidad</h3>
              <div>
                <div>
                  <DateRangeIcon></DateRangeIcon>
                  <p>12-10-2021</p>
                </div>
                <div>
                  <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                  <p>John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BlogSlide;
