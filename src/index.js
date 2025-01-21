import React, {  useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [mood, setMood] = useState("");
  const [color, setColor] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`${mood} goes with colour ${color}`);
    setMood("type mood");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input 
      value={mood} 
      type="text" 
      placeholder="Mood.." 
      onChange={(e) => setMood(e.target.value)}
      />
      <input 
      value={color} 
      type="color"
      onChange={(e) => setColor(e.target.value)} 
      />
      <button>ADD</button>
    </form>
  ); //end return
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
