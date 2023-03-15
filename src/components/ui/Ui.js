import React from 'react';
import './ui.css';

const Ui = () => {
  return (
    <div id="headerContainer">
        <div class="headerInnerContainer">
            <div id="userImage"></div>
            <p>Hello User!</p>
        </div>
        <div class="headerInnerContainer">
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