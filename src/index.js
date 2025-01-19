import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App(){
  // UseState to initilize a checkbox 
  // imput uses onChange and value for inuot contents
 const [checked, setChecked] = useState(false); 
  return (
    <div>
    <input type='checkbox' value={checked} onChange={() => setChecked(!checked)}/>
    <p>{checked ? "Checked":"Not Checked"}</p>
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
