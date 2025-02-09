import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useFetch } from "./useFetch";

function App({ login }) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);

  if (loading) 
    return (<h1>Loading...</h1>);
  
  if (error) 
    return (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  );

  return (
    <div>
      <img src={data.avatar_url} alt=""/>
    <div>
      <h1>{data.login}</h1>
    </div>
    </div>
  );
}

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(
<App login="MuziPH"/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
