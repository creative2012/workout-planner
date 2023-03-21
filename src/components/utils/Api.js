import { useState, useEffect } from "react";

//useApi function with 2 parameters for API request
function useApi(url, options) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //useEffect with parameter to run on first render and any time url value changes
  useEffect(() => {
    setIsLoading(true);
     fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);
  return { data, isLoading, error };
}
export default useApi;

