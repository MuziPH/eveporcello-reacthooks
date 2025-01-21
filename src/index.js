import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const initialState = {
  message: "hi"
}

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "yell":
      return {
        // You have access to the previous message value
        message: `HEY!! I JUST SAID ${state.message}`
      };
    case "whisper":
      return {
        message: "excuse me"
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </>
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
