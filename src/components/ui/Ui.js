import React, { useState, useEffect } from 'react';
import { getFromLocalStorage } from '../utils/LocalStorage';
import { motion } from "framer-motion";
import './ui.css';
import Bmi from './bmi/Bmi';
import Profile from './profile/Profile';

const Ui = () => {
let username = getFromLocalStorage('user').name;
let userInitial = username.charAt(0);
  return (
    <motion.div id="headerContainer"
    initial={{height: 0}}
            animate={{height: 80+'px'}}
            transition={{ delay: 0.5, duration: 0.2, ease: "linear"}}
            exit={{opacity: 0, height: 0, transition:{duration: 0.5}}}>
        <div className="headerInnerContainer">
            <Profile name={userInitial}/>
            <p>Hello {username}!</p>
        </div>
        <div className="headerInnerContainer">
        <Bmi />      
        </div>
    </motion.div>
  )
}

export default Ui