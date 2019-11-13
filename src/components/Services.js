import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <div className="services-content">
          <p className="services-title"></p>
          <p className="services-summary"></p>
        </div>
        <div className="services-box">
          <p className="services-box-title"></p>
          <canvas className="services-img" />
          <p className="services-content"></p>
        </div>
        <canvas className="splitter" />
      </div>
    </div>
  );
};

export default Services;
