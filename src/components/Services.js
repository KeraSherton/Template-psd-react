import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services-container">
          <div className="services-content-box">
            <p className="services-title">Lorem Ipsum Dolor</p>
            <p className="services-summary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              libero error et atque.
            </p>
          </div>

          <div className="services-content-box">
            <p className="services-box-title">Vivamus quis mi</p>
            <canvas className="services-icon" />
            <p className="services-content">
              In hac habitasse platea dictumst. Curabitur at lacus ac velit
              ornare lobortis. Curabitur a felis in nunc fringilla tristique.
              Morbi mattis ullamcorper velit.
            </p>
          </div>
          <div className="services-content-box">
            <p className="services-box-title">Vivamus quis mi</p>
            <canvas className="services-icon" />
            <p className="services-content">
              In hac habitasse platea dictumst. Curabitur at lacus ac velit
              ornare lobortis. Curabitur a felis in nunc fringilla tristique.
              Morbi mattis ullamcorper velit.
            </p>
          </div>
          <div className="services-content-box">
            <p className="services-box-title">Vivamus quis mi</p>
            <canvas className="services-icon" />
            <p className="services-content">
              In hac habitasse platea dictumst. Curabitur at lacus ac velit
              ornare lobortis. Curabitur a felis in nunc fringilla tristique.
              Morbi mattis ullamcorper velit.
            </p>
          </div>
        </div>
      </div>
      <canvas className="services-splitter" />
    </>
  );
};

export default Services;
