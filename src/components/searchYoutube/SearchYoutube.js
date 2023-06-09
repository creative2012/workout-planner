import React, { useEffect, useState } from "react";
import axios from "axios";
import './searchYoutube.css';
function makeId() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 8) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function SearchYoutube(props) {
    const query = props.query;
    const [linkArray, setlinkArray] = useState([]);
    const array1 = [];
    //key fields for requesting API
    const options = {
    method: 'GET',
    url: 'https://simple-youtube-search.p.rapidapi.com/search',
    params: {query: query, safesearch: 'false'},
    headers: {
        'X-RapidAPI-Key': '473c3dfe29msh141ce566ce74434p1b719ajsn65fb6a576b97',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    }};
    useEffect(() => {
    //API request
    axios.request(options)
        .then(function (response) {
        //call function to get the first 3 youtube links
        getResults(response.data.results);
    }).catch(function (error) {
        console.error(error);
    });
    

    //function to get first 3 results and add it in array with the youtube link and id to embed
    function getResults(data) {
        data.slice(0,3).map((e) => {
        
        array1.push({link:"https://www.youtube.com/embed/" + e.id, id: e.id})})
        setlinkArray(array1);
        }
    }, [query]);

    return (
        <div className="YoutubeVideos" key="youTubeVids">
              {
                //Display 3 youtube videos with links from API result
                linkArray.map(item => (
                    <iframe 
                    key={makeId()}
                    className="video"
                    width="426"
                    height="240"
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

