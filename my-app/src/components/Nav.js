import React from "react";
import "./Nav.css";
export const Nav = () => {
  return (
    <div className="Nav">
      <ul className="list">
        <li className="navbar-item">
          <a href="#">WELCOME</a>
        </li>
        <li className="navbar-item" id="downloads">
          <a href="#">DOWNLOADS</a>
        </li>
        <li className="navbar-item">
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};
