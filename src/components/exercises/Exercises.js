import React from 'react';
import './exercises.css';
import useApi  from '../utils/Api';
import SearchYoutube from '../searchYoutube/SearchYoutube';
import placeholder from '../../assets/media/placeholder-image.jpg';
import Grid from '@mui/material/Grid';

function Exercises(props) {
  const options = {
    headers: { "x-api-key": "UZjs8Cbxc5w9apyoeQoHkw==WvbVw7sr6wacZCG2" },
  };
  const { data, isLoading, error } = useApi(
    "https://api.api-ninjas.com/v1/exercises?name=" + props.name,
    options
  );
  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    console.log(data);
  }
  return (
    <div>
      <Grid container spacing={2} className="exerciseContainer">
        <Grid item xs={12} md={6} lg={5} className="exerciseGridImage">
          <img className='exerciseImage' src={placeholder} alt="Placeholder"></img>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <div className="exerciseGridDetails">
            <h1>Name: {data[0].name}</h1>
            <h2>Type: {data[0].type}</h2>
            <h2>Muscle: {data[0].muscle}</h2>
            <h3>Equipment: {data[0].equipment}</h3>
            <h3>Instructions: {data[0].instructions}</h3>
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