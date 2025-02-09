import React,{ useContext } from "react";
import "./App.css";
import { TreesContext } from ".";

function App() {
  const { trees } = useContext(TreesContext)
  return (
    <div>
      <h1>Trees I never saw</h1>
      <ul>
        {trees.map(
          (tree) => (<li key={tree.id}>{tree.type}</li>)
        )}
      </ul>
    </div>
  ); //end return
}
export default App;
