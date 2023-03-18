import React, { useEffect, useState } from "react";
import useApi from "../utils/Api.js";
import axios from "axios";

function SearchYoutube() {
    const [query, setQuery] = useState("biceps");
    const [linkArray, setlinkArray] = useState([]);
    const array1 = [];
    const options = {
    method: 'GET',
    url: 'https://simple-youtube-search.p.rapidapi.com/search',
    params: {query: query, safesearch: 'false'},
    headers: {
        'X-RapidAPI-Key': '473c3dfe29msh141ce566ce74434p1b719ajsn65fb6a576b97',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    }
    };
    useEffect(() => {
    axios.request(options)
        .then(function (response) {
        console.log(response.data.results);
        getResults(response.data.results);
        console.log(array1);
    }).catch(function (error) {
        console.error(error);
    });

    function getResults(data) {
        data.slice(0,3).map((e) => {
        array1.push({link:"https://www.youtube.com/embed/" + e.id})})
        setlinkArray(array1);
        }
    }, [query]);

    return (
        <div>
              {
                //(JSON.stringify(data.results[0]));    
                linkArray.map(item => (
                    <iframe
                    width="560"
                    height="315"
                    src={item.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                )) 
               }
            </div>
        )
}

export default SearchYoutube
