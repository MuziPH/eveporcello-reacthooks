// The states we need handle below
// If the data is not available yet but is loading
// If we get the data
// If there is an error

import { useEffect, useState } from "react";

export function useFetch(uri) {
  // Define state variables
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // If there is not URI
    if (!uri) return;
    // If there is a URI the fetch
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]); // Only call useEffect when there is a new uri - chnage in the uri
return {loading, data, error}
}
