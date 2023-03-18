import React, { useState  } from "react";
import './search.css';
import GetData from "./components/GetData";
import MuscleMap from "./components/MuscleMap";

function Search() {
    
    const [item, setItem] = useState('')
    const [searchTerm, setSearchTerm] = useState('Random')
    function getData(e){
        setSearchTerm(e)
        setItem(e);
        
    }
     
    return (
        <div id="searchContainer">
            <MuscleMap id="mMap" func={getData}/>
            <div id="searchResults">
                <h2>{searchTerm}</h2>
                   <GetData data={item} />
            </div>
        </div>
    )

    
}
export default Search
