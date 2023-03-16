import { useState, useEffect } from "react";

function useApi(url, options) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
  }, []);
  return { data, isLoading, error };
}
export default useApi;

