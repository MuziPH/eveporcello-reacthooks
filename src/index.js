import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){
  // UseState takes an array of the initial state and the function to update the state of a given variable
  const [status, setStatus] = useState("Not Delivered");
  
  return (
    <div>
      <h1>The package is: {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Muzi"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
