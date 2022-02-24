import React from "react";
import "./App.css";
import { Cutaway } from "./components/Cutaway";
import background from "./assets/images/fullsizebackground.png";
import { Nav } from "./components/Nav";
import { Logo } from "./components/Logo";
import Terms from "./components/Terms";


function App() {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div></div>

      <div></div>
      <div>
        <Nav />
      </div>
      <div></div>
      <div className="cutawaycontainer">
        <Cutaway />
        <Logo />
      </div>
      <div></div>
      <div>
        
        <Terms/>
        </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
