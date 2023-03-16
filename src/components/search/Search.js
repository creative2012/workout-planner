import React, { useState } from "react";
import './search.css';
import useApi from "../utils/Api.js";

function Search() {
    /*const [muscle, setSearchMuscle] = useState("biceps");*/
    const [muscle] = useState("biceps");
    const options = {
    headers:{ 'x-api-key': 'UZjs8Cbxc5w9apyoeQoHkw==WvbVw7sr6wacZCG2'}
    };
    const { data, isLoading, error } = useApi ('https://api.api-ninjas.com/v1/exercises?muscle='+ muscle, options);
    if(isLoading) {
        return <p>Loading....</p>;
    }
    if(error){
        return <p>{error.message}</p>;
    }
    console.log(data)
    /*const handleInputChange = event => {
        setSearchMuscle(event.target.value);
        }*/

    return (
        <div>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}      
            </div>
        )
    }
export default Search
