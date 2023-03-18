import React, { useState, useEffect } from "react";
import "./getdata.css";
import useApi from "../../utils/Api.js";
import { Link } from "react-router-dom";

function GetData(props) {
    const options = {
        headers: { 'x-api-key': 'UZjs8Cbxc5w9apyoeQoHkw==WvbVw7sr6wacZCG2' }
    };
    const { data, isLoading, error } = useApi('https://api.api-ninjas.com/v1/exercises?muscle=' + props.data, options);
    if (isLoading) {
        return <p>Loading....</p>;
    } else {
        console.log(data)