import React, { useState, useEffect } from "react";
import "./getdata.css";
import useApi from "../../utils/Api.js";
import { Link } from "react-router-dom";

function GetData(props) {
  const options = {
    headers: { "x-api-key": "UZjs8Cbxc5w9apyoeQoHkw==WvbVw7sr6wacZCG2" },
  };
  const { data, isLoading, error } = useApi(
    "https://api.api-ninjas.com/v1/exercises?muscle=" + props.data,
    options
  );
  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    console.log(data);
  }
  return (
    <div className="searchBox">
      {data.map((item) => (
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
            <img
              src="./assets/media/abdominals.jpg"
              style={{
                width: 200 + "px",
              }}
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
                <b>Level:</b> {item.difficulty}
              </div>
              <div className="type">
                <b>Type:</b> {item.type}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default GetData;
