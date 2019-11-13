import React from "react";
import "./Footer.css";
import up from "../images/up.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-rectangle">
        <canvas className="social-circle" />
        <canvas className="social-circle" />
        <canvas className="social-circle" />
        <canvas className="social-circle" />
        <img className="button-up" src={up} alt="up" />
      </div>
    </div>
  );
};

export default Footer;
