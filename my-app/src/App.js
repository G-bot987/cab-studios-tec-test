import React from "react";
import { Cutaway } from "./components/Cutaway";
import { Nav } from "./components/Nav";
import { Terms } from "./components/Terms";

export const App = () => {
  return (
    <div
      className="app"
    >
      <Nav />

      <Cutaway />

      <Terms />
    </div>
  );
};

export default App;
