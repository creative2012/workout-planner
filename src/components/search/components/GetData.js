import React from "react";
import "./getdata.css";
import useApi from "../../utils/Api.js";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CircularProgress, Rating } from '@mui/material';

function GetData(props) {

  const options = {
    headers: { "x-api-key": "UZjs8Cbxc5w9apyoeQoHkw==WvbVw7sr6wacZCG2" },
  };
  const { data, isLoading} = useApi(
    "https://api.api-ninjas.com/v1/exercises?muscle=" + props.data,
    options
  );
  if (isLoading) {
    return <div style={{marginTop: 100+'px',display:'flex', alignItems: 'center', justifyContent:'center'}}> <CircularProgress /></div>;
  } else {
    console.log(data);
  }
  function showResult(item) {

    return (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2, ease: "linear" }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <Link
          to={"/result"}
          className="searchLink"
          state={{
            id: item.name,
          }}
        >
          <div
            style={{
              display: "flex",
              border: 1 + "px solid Grey",
              marginBottom: 5 + "px",
            }}
          >
            <img className="workoutImage"
              src="./assets/media/abdominals.jpg"
              
              key={item.id}
            ></img>
            <div
              className="searchDetail"
              style={{
                padding: 20 + "px",
                height: 80 + "px",
                width: 100 + "%",
              }}
              key={item.id}
            >
              <h4 className="title">{item.name}</h4>
              <div className="diff">
                <b>Level:</b> {item.difficulty} <br/>
                <Rating name="read-only" value={item.difficulty === 'beginner' ? 1 : 3} readOnly />
              </div>
              <div className="type">
                <b>Type:</b> {item.type}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    )


  }
  return (
    <AnimatePresence>
      <div className="searchBox">
        {

          data.map((item) => {
            return showResult(item);

          })


        }
      </div>
    </AnimatePresence>
  );
}

export default GetData;
