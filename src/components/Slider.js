import React from "react";
import "./Slider.css";
import left from "../images/left.png";
import right from "../images/right.png";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-rectangle">
        <img className="button-left" src={left} alt="left" />
        <img className="button-right" src={right} alt="right" />
      </div>
      <div className="slider-background"></div>
    </div>
  );
};

export default Slider;
