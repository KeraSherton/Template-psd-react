import React from "react";
import "./Slider.css";
import left from "../images/left.png";
import right from "../images/right.png";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-rectangle">
        <input type="image" src={left} className="button-left" />
        <input type="image" src={right} className="button-right" />
      </div>
      <div className="slider-background"></div>
    </div>
  );
};

export default Slider;
