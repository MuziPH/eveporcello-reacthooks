import React from "react";
import "./App.css";
import { useTrees } from ".";

function App() {
  const { trees } = useTrees();
  return (
    <div>
      <h1>Trees I never saw</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  ); //end return
}
export default App;
