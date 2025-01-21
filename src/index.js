import React, {  useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const mood = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const moodValue = mood.current.value;
    const colorValue = color.current.value;
    alert(`${moodValue} goes with colour ${colorValue}`)
    mood.current.value = "type mood...";
    color.current.value = "";
  }

  return (
    <form onSubmit={submit}>
      <input ref={mood} type='text' placeholder='Mood..'/>
      <input ref={color} type='color' />
      <button >ADD</button>
    </form>
  )//end return
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
