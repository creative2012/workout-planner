import axios from "axios";
import { useEffect } from "react";

function useAPI() {
  useEffect(() => {
    axios
      .get('https://api.api-ninjas.com/v1/exercises', {
        headers:{ 'x-api-key': 'UZjs8Cbxc5w9apyoeQoHkw==WvbVw7sr6wacZCG2'},
        params: {muscle: 'biceps'}
              })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

}

export default useAPI
