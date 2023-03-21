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

function Exercises() {
  //react router hook to pass state from search component
  let exercise = useLocation();
  let eName, eType, eMuscle, eEquipment, eInstructions, eYoutube  = "";
  const options = {
    headers: { "x-api-key": "UZjs8Cbxc5w9apyoeQoHkw==WvbVw7sr6wacZCG2" },
  };
  const { data, isLoading, error } = useApi(
    "https://api.api-ninjas.com/v1/exercises?name=" + exercise.state.id,
    options
  );
  if (isLoading) {
    return <p>Loading....</p>;
  } else if(error){
    console.log(error);
  } else {
    console.log(data);
    if(data.length > 0)
    {
      //set variables from API result and call function to capitalise letter and replace underscores with space
      eName = data[0].name;
      eType = capitalizeFirstLetter(data[0].type.replace(/_/g," "));
      eMuscle = capitalizeFirstLetter(data[0].muscle.replace(/_/g," "));
      eEquipment = capitalizeFirstLetter(data[0].equipment.replace(/_/g," "));
      eInstructions = data[0].instructions;
      eYoutube = data[0].name.replace(/ /g,"%");
    }
  }
  return (
    <div>
      <Link
          to={"/home"}
        >
      {/*Font Awesome component added for the arrow */}
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
          {/*Calling SearchYoutube component to display 3 videos depending on the name of the exercise */}
          <SearchYoutube query={eYoutube + "Gym%Exercise%Technique"} />
        </Grid> 
      </Grid>
    </div>
  )
}

//Function to capitalise first letter for better display of information
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Exercises