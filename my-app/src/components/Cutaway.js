import React from "react";
import "./Cutaway.css";
import cutaway from "../assets/images/cutaway.png";
export const Cutaway = () => {
  return (
    <div>
      <div
        id="wrapper"
        className="cutaway"
        style={{ backgroundImage: `url(${cutaway})` }}
      >
        {/* <div id="topleft"></div>
        <div id="topright"></div>
        <div id="bottomleft"></div>
        <div id="midright"></div>
        <div id="bottomright"></div> */}
      </div>
    </div>
  );
};
