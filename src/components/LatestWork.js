import React from "react";
import "./LatestWork.css";

const LatestWork = () => {
  return (
    <div className="latestWork">
      <div className="latestWork-container">
        <div className="latestWork-content-box">
          <p className="latestWork-title">Lorem Ipsum Dolor</p>
          <p className="latestWork-summary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            libero error et atque.
          </p>
        </div>

        <div className="latestWork-content-box">
          <canvas className="latestWork-img" alt="project image" />
          <p className="latestWork-describe">
            Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id
            nisl quis enim dignissim sagittis.
          </p>
          <a href="./work" className="latestWork-link">
            View This Project &#8811;
          </a>
        </div>
        <div className="latestWork-content-box">
          <canvas className="latestWork-img" alt="project image" />
          <p className="latestWork-describe">
            Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id
            nisl quis enim dignissim sagittis.
          </p>
          <a href="./work" className="latestWork-link">
            View This Project &#8811;
          </a>
        </div>
        <div className="latestWork-content-box">
          <canvas className="latestWork-img" alt="project image" />
          <p className="latestWork-describe">
            Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id
            nisl quis enim dignissim sagittis.
          </p>
          <a href="./work" className="latestWork-link">
            View This Project &#8811;
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
