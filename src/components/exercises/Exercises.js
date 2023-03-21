import React from 'react';
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './exercises.css';
import useApi  from '../utils/Api';
import SearchYoutube from '../searchYoutube/SearchYoutube';
import placeholder from '../../assets/media/placeholder-image.jpg';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

function Exercises() {
  let exercise = useLocation();
  //console.log(exercise.state.id);
  let eName, eType, eMuscle, eEquipment, eInstructions, eYoutube  = "";
 
      eName = exercise.state.id;
      eType = capitalizeFirstLetter(exercise.state.type.replace(/_/g," "));
      eMuscle = capitalizeFirstLetter(exercise.state.muscle.replace(/_/g," "));
      eEquipment = capitalizeFirstLetter(exercise.state.equipment.replace(/_/g," "));
      eInstructions = exercise.state.instructions;
      eYoutube = exercise.state.id.replace(/ /g,"%");
    
  
  return (
    <motion.div key="exercises"
    initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ delay: 0, duration: 0.2, ease: "linear"}}
        exit={{opacity: 0, transition:{duration: 0.5}}}>
      <Link
          to={"/home"}
        >
      <Button className="backButton"><FontAwesomeIcon icon={faArrowLeft}/>&nbsp;&nbsp;Back</Button>
      </Link>
      <Grid container spacing={2} className="exerciseContainer">
        <Grid item xs={12} md={6} lg={5} className="exerciseGridImage">
          <img className='exerciseImage' src={placeholder} alt="Placeholder"></img>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <div className="exerciseGridDetails">
            <h1>Name: {eName}</h1>
            <h2>Type: {eType}</h2>
            <h2>Muscle: {eMuscle}</h2>
            <h3>Equipment: {eEquipment}</h3>
            <h3>Instructions: {eInstructions}</h3>
          </div>
        </Grid>
        <Grid item xs={12}>
          <SearchYoutube query={eYoutube + "Gym%Exercise%Technique"} />
        </Grid> 
      </Grid>
    </motion.div>
  )
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Exercises