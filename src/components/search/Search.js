import React, { useState  } from "react";
import './search.css';
import GetData from "./components/GetData";
import MuscleMap from "./components/MuscleMap";
import { motion } from "framer-motion";

function Search() {
    const [item, setItem] = useState('')
    const [searchTerm, setSearchTerm] = useState('Random')
    function getData(e){
        setSearchTerm(e)
        setItem(e);
    }
     
    return (
        <motion.div id="searchContainer"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ delay: 1, duration: 0.2, ease: "linear"}}
        exit={{opacity: 0, transition:{duration: 0.5}}}>
            <MuscleMap id="mMap" func={getData}/>
            <div id="searchResults">
                <h2>{searchTerm}</h2>
                <div id="SearchBoxes">
                   <GetData data={item} />
                   </div>
            </div>
        </motion.div>
    )
    
}
export default Search
