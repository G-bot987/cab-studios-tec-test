import React from "react";
import "./App.css";
import { Cutaway } from "./components/Cutaway";
import  background  from './assets/images/background.png';

function App() {
  return (
    <div className="background"
      style={{ backgroundImage: `url(${background})` }}
    >

    <div
      // className="App"
      >
      <Cutaway />
    </div>
      </div>
  );
}

export default App;
