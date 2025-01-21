import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App() {
  const [data, setData] = useState([]);

  // Fetch data to retrieve data
  // If the second argument is provided the effect will only fire once on first render
  // Hence means the data is only fetched once and not pn eevry render when clicking the clear button
  // Removing the dependency array will continously fetch data even after clear data render
  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(res => setData(res));
    //.then(setData); // shirthand
  }, [])

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <button onClick={() => setData([])}>Clear Data</button>
    </div>
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
