import React, { useState, useEffect } from 'react';
import { getFromLocalStorage } from '../utils/LocalStorage';
import './ui.css';

const Ui = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    setName(getFromLocalStorage('user').name)
  },[])

  return (
    <div id="headerContainer">
        <div className="headerInnerContainer">
            <div id="userImage"></div>
            <p>Hello {name}!</p>
        </div>
        <div className="headerInnerContainer">
            <ul>
                <li>Calender</li>
                <li>BMI Calculator</li>
                <li>Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default Ui