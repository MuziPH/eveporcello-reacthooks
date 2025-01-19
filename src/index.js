import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaStar } from 'react-icons/fa';

// create an array of a given length
const createArray = (length) => [...Array(length)];

// selected default vaue = false
function Star({ selected = false, onSelect }) {
  return <FaStar
    color={selected ? "red" : "grey"}
    onClick={onSelect}
  />
}

// Passed value would be <StarRating totalRatings={10}
// totalRatings given default value = 5 if no value is passed like <StarRating />
function StarRating({ totalRatings = 3 }) {

  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>{
      createArray(totalRatings).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))// end map
    }
    <p>Rating: {selectedStars} of {totalRatings}</p>
    </>
  );// return

}// end function StarRating

function App() {
  return (
    <StarRating totalRatings={5} />
  )
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
