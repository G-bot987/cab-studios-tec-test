import React from "react";
import { Cutaway } from "./components/Cutaway";
import { Nav } from "./components/Nav";
import { Terms } from "./components/Terms";

export const App = () => {
  return (
    <div
      className="app"
    >
      <Terms />
<div className="space"></div>
      <Cutaway />
<div className="space" id="narrow"></div>
      <Nav />
    </div>
  );
};

export default App;
