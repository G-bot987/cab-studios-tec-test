import React from "react";
import "./Nav.css";
export const Nav = () => {
  return (
    <div className="Nav">
      <ul
        style={{
          margin: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 100,
        }}
      >
        <li className="navbar-item">
          <a href="#">WELCOME</a>
        </li>
        <li
          className="navbar-item"
          style={{
            margin: "0 2rem",
          }}
        >
          <a href="#">DOWNLOADS</a>
        </li>
        <li className="navbar-item">
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};
