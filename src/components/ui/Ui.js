import React, { useState, useEffect } from 'react';
import { getFromLocalStorage } from '../utils/LocalStorage';
import { motion } from "framer-motion";
import './ui.css';
import Bmi from './bmi/Bmi';

const Ui = () => {

  return (
    <motion.div id="headerContainer"
    initial={{height: 0}}
            animate={{height: 80+'px'}}
            transition={{ delay: 0.5, duration: 0.2, ease: "linear"}}
            exit={{opacity: 0, height: 0, transition:{duration: 0.5}}}>
        <div className="headerInnerContainer">
            <div id="userImage"></div>
            <p>Hello {getFromLocalStorage('user').name}!</p>
        </div>
        <div className="headerInnerContainer">
        <Bmi />      
        </div>
    </motion.div>
  )
}

export default Ui