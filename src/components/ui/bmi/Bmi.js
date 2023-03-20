import React, { useState, useEffect } from 'react'
import { getFromLocalStorage } from '../../utils/LocalStorage';
import './bmi.css';
import axios from 'axios';

const Bmi = (props) => {

    let data2 = {

        bmi: '',
        health: '',
        healthy_bmi_range: ''

    }
    const [response, setResponse] = useState(data2);
    const [userData, setUserData] = useState(getFromLocalStorage('user'));
    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/bmi',
        params: { age: userData.age, weight: userData.weight, height: userData.height },
        headers: {
            'X-RapidAPI-Key': '1878354580msh8b369f3fa728c53p1abe74jsncda9f6dbfe87',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options)
            .then(function (response) {
                console.log(response.data.data)
                setResponse(response.data.data)

            }).catch(function (error) {
                console.error(error);
            });
    }, [props]);

    return (

        <div id="bmiResult">

            <div className='smallTitle'>{response.bmi} <span>Your BMI</span></div>
            <div className='smallTitle'>{response.health} <span>Your Health</span></div>

        </div>
    )

}

export default Bmi