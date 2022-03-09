import React from "react";
import "./Cutaway.css";
import cutaway from "../assets/images/cutaway.png";
import { Logo } from "./Logo.js";

export const Cutaway = () => {
  return (
    <div id="cutaway" style={{ backgroundImage: `url(${cutaway})` }}>
      <Logo />
    </div>
  );
};
