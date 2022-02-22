import React from "react";
import "./App.css";
import { Cutaway } from "./components/Cutaway";
import background from "./assets/images/fullsizebackground.png";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>tl</div>

      <div>tm</div>
      <div>
        <Nav />
      </div>
      <div>ml</div>
      <div className="cutawaycontainer">
        <Cutaway />
      </div>
      <div>mr</div>
      <div>bl</div>
      <div>bm</div>
      <div>br</div>
    </div>
  );
}

export default App;
