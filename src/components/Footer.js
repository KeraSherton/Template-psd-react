import React from "react";
import "./Footer.css";
import up from "../images/up.png";
import submit from "../images/submit.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-rectangle-container">
        <div className="footer-rectangle">
          <div className="footer-social-container">
            <canvas className="social-circle" />
            <canvas className="social-circle" />
            <canvas className="social-circle" />
            <canvas className="social-circle" />
          </div>
          <input type="image" src={up} className="button-up" />
        </div>
      </div>

      <div className="footer-box">
        <div className="footer-content-box">
          <p className="footer-title">About us</p>
          <div className="footer-img-frame">
            <div className="footer-img-aboutUs"> 215 x 90px </div>
          </div>
          <div className="footer-about-us">
            <p className="footer-txt">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem.
            </p>
          </div>
          <a href="./aboutUs" className="footer-link">
            Read more &#8811;
          </a>
        </div>

        <div className="footer-content-box">
          <p className="footer-title">Link block</p>
          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            Lorem ipsum dolor sit
          </a>
          <div className="footer-link-separator" />

          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            Etiam rhoncus. Maecenas tempus
          </a>
          <div className="footer-link-separator" />

          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            Nam pretium turpis et arcu.
          </a>
          <div className="footer-link-separator" />

          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            Aenean posuere, tortor sed.
          </a>
          <div className="footer-link-separator" />

          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            In dui magna, posuere eget
          </a>
          <div className="footer-link-separator" />

          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            Phasellus a est. Phasellus magna.
          </a>
          <div className="footer-link-separator" />

          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            Lorem ipsum dolor sit
          </a>
          <div className="footer-link-separator" />

          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            Mauris turpis nunc, blandit et
          </a>
          <div className="footer-link-separator" />

          <span className="arrow">&#8811;</span>
          <a href="link" className="footer-link">
            Praesent vestibulum dapibus nibh.
          </a>
          <div className="footer-link-separator" />
        </div>
        <div className="footer-content-box">
          <p className="footer-post-cont-title">From the blog</p>
          <div className="footer-blog-art">
            <p className="footer-post-title">Post title</p>
            <p className="footer-post-date">Friday, 13th December 2019</p>
            <p className="footer-txt">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              ridiculus mus. consectetuer adipiscing elit.
            </p>
            <a href="./aboutUs" className="footer-link">
              Read more &#8811;
            </a>
          </div>
          <div className="footer-blog-art">
            <p className="footer-post-title">Post title</p>
            <p className="footer-post-date">Friday, 13th December 2019</p>
            <p className="footer-txt">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              ridiculus mus. consectetuer adipiscing elit.
            </p>
            <a href="./aboutUs" className="footer-link">
              Read more &#8811;
            </a>
          </div>
        </div>

        <div className="footer-content-box">
          <p className="footer-title">Contact us</p>
          <form action="">
            <input
              className="footer-contact"
              type="text"
              id="name"
              placeholder="Name"
            />
            <input
              className="footer-contact"
              type="text"
              id="email"
              placeholder="Email"
            />
            <textarea
              className="footer-contact-message"
              type="text"
              id="message"
              placeholder="Message"
            />
            <input type="image" src={submit} value="Submit" />
          </form>
        </div>
      </div>
      <canvas className="footer-splitter" />
      <div className="footer-footer">
        <p className="copright">
          Copright &#9400; 2019- All Rights Reserved - Domain Name
        </p>
        <p className="autor">Template by OS Template</p>
      </div>
    </div>
  );
};

export default Footer;
