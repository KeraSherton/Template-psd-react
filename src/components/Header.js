import React from "react";
import "./Header.css";

const Header = () => {
  const menu2 = "style demo";
  const menu3 = "full width";
  const menu4 = "dropdown";
  const menu5 = "portfolio";
  const menu6 = "gallery";

  return (
    <div className="header">
      <div className="logo">
        <div className="logoText">Autonomous</div>
        <canvas className="line" />
        <div className="logoDescribe">
          Free PSD <br /> Website Template
        </div>
      </div>

      <div className="menu">
        <nav>
          <ul className="list">
            <li className="item">
              <a href="./menu1" className="menuTxt">
                home
              </a>
            </li>
            <li className="item">
              <a href="./menu2" className="menuTxt">
                {menu2}
              </a>
            </li>
            <li className="item">
              <a href="./menu3" className="menuTxt">
                {menu3}
              </a>
            </li>
            <li className="item">
              <a href="./menu4" className="menuTxt">
                {menu4}
              </a>
            </li>
            <li className="item">
              <a href="./menu5" className="menuTxt">
                {menu5}
              </a>
            </li>
            <li className="item">
              <a href="./menu6" className="menuTxt">
                {menu6}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
