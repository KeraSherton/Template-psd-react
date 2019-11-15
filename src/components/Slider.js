import React, { useState } from "react";
import "./Slider.css";
import left from "../images/left.png";
import right from "../images/right.png";

const Slider = () => {
  //     const images=[
  //         "https://images.unsplash.com/photo-1511902467434-4677a533a674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=370&q=210"
  //         "https://images.unsplash.com/photo-1553755322-fb5d174a0656?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=370&q=210"
  //         "https://images.unsplash.com/photo-1528301024193-8b8b6c7d9d6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=370&q=210"
  //         "https://images.unsplash.com/photo-1438480478735-3234e63615bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=370&q=210"
  //         "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=370&q=210"
  //     "https://images.unsplash.com/photo-1515245696852-ae418cad9b62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=370&q=60"
  //     ]
  //     const [index, setIndex]= useState(0),

  //     function goToPrevSlide() {
  //         if(index===0){
  //         return setIndex(index -1)}
  //     }

  // function goToNextSlide(){
  //     if (index===images.length -1){
  //         return setIndex(index=0)
  //     }
  // }

  return (
    <div className="slider">
      <div className="slider-rectangle">
        <input type="image" src={left} className="button-left" />
        <input type="image" src={right} className="button-right" />
      </div>
      <div className="slider-background">
        <div className="slider-wrapper">
          <div className="image">210 x 370px</div>
          <div className="image">210 x 370px</div>
          <div className="image">210 x 370px</div>
          <div className="image">210 x 370px</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
