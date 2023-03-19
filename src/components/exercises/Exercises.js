import React from 'react';
import './exercises.css';
import SearchYoutube from '../searchYoutube/SearchYoutube';
import placeholder from '../../assets/media/placeholder-image.jpg';
import Grid from '@mui/material/Grid';

const Exercises = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={5} className="exerciseGridImage">
          <img className='exerciseImage' src={placeholder} alt="Placeholder"></img>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <div className="exerciseGridDetails">
            <h1>Incline Hammer Curls</h1>
            <h2>Type: strength</h2>
            <h2>Muscle: biceps</h2>
            <h3>Equipment: dumbbell</h3>
            <h3>Instructions: Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.</h3>
          </div>
        </Grid>
        <Grid item xs={12}>
          <SearchYoutube query="incline+hammer+curls" />
        </Grid> 
      </Grid>
    </div>
  )
}

export default Exercises