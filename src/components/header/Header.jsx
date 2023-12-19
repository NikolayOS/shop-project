import React from "react";
import style from "./Header.module.css"
const Header = (props) => {
  return (
    <nav className={`#ffea00 yellow accent-3 ${style.nav}`}>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo"> Shop </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repository</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
