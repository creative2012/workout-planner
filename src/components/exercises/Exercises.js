import React from 'react';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './exercises.css';
import useApi from '../utils/Api';
import SearchYoutube from '../searchYoutube/SearchYoutube';
import placeholder from '../../assets/media/placeholder-image.jpg';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import reactStringReplace from 'react-string-replace';

function Exercises() {
  //react router hook to pass state from search component
  let exercise = useLocation();
  //console.log(exercise.state.id);
  let eName, eType, eMuscle, eEquipment, eInstructions, eYoutube = "";


  eName = exercise.state.id;
  eType = capitalizeFirstLetter(exercise.state.type.replace(/_/g, " "));
  eMuscle = capitalizeFirstLetter(exercise.state.muscle.replace(/_/g, " "));
  eEquipment = capitalizeFirstLetter(exercise.state.equipment.replace(/_/g, " "));
  eInstructions = exercise.state.instructions;
  eYoutube = exercise.state.id.replace(/ /g, "%");



  return (
    <motion.div key="exercises"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "linear" }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <Link key="exercises1"
        to={"/home"}
      >

        {/*Font Awesome component added for the arrow */}
        <Button key="exercises2" className="backButton"><FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;Back</Button>

      </Link>
      <Grid key="exercises3" container spacing={1} className="exerciseContainer">
        
        <Grid key="exercises4" item xs={12} md={6} lg={5} className="exerciseGridImage">
          <img className='exerciseImage' src={placeholder} alt="Placeholder"></img>
          <div className="exerciseGridDetails">
            
            <h2>Type: <span>{eType}</span></h2>
            <h2>Muscle: <span>{eMuscle}</span></h2>
            <h3>Equipment: <span>{eEquipment}</span></h3>
          </div>
        </Grid>
        <Grid key="exercises5" className="instructions" item xs={12} md={6} lg={7}>
        <h1>{eName}</h1>
          
          <h3>Instructions: </h3>
        <span>{reactStringReplace(eInstructions, '.', (match, i) => (
              <div><br /> </div>
            ))}</span>
          
        </Grid>
      
        <Grid key="exercises6" item xs={12}>
          {/*Calling SearchYoutube component to display 3 videos depending on the name of the exercise */}
          <SearchYoutube key="youtube" query={eYoutube + "Gym%Exercise%Technique"} />

        </Grid>
      </Grid>
    </motion.div>
  )
}

//Function to capitalise first letter for better display of information
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Exercises