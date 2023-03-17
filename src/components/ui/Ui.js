import React, { useState, useEffect } from 'react';
import { getFromLocalStorage } from '../utils/LocalStorage';
import { motion } from "framer-motion";
import './ui.css';

const Ui = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    setName(getFromLocalStorage('user').name)
  },[])

  return (
    <motion.div id="headerContainer"
    initial={{height: 0}}
            animate={{height: 80+'px'}}
            transition={{ delay: 0.5, duration: 0.2, ease: "linear"}}
            exit={{opacity: 0, height: 0, transition:{duration: 0.5}}}>
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
    </motion.div>
  )
}

export default Ui