import React, { useState } from "react";
import { sliderData } from "./SliderData";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { useSpring, animated } from "react-spring";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

import Messenger from "./Messenger";
// Import Swiper styles

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Landing = () => {
  return (
    <div className="container">
      <div className="landing">
        <div className="blurred-box">
          <div>
            <h2>Muebles que hacen</h2>
            <h2>click</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus deserunt cumque temporibus fugit
            </p>
            <Button>Comprar ahora</Button>
          </div>
        </div>
        <div className="blurred-box-2">
          <div>
            <h3>Escritorio Montessori</h3>
            <p>Para tus ninos</p>
            <div>
              <h3>$ 1990</h3>
              <Link>
                <ArrowForwardIcon></ArrowForwardIcon>
              </Link>
            </div>
          </div>
        </div>
        <div className="landing__slider">
          <Swiper
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination
            autoplay
            delay={5000}
          >
            <SwiperSlide className="slide">
              <div className="inner">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="inner2">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="inner">
                <div></div>
                <div></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Landing;
