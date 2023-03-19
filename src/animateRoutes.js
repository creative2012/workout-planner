import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { Exercises, Search, UserSelect } from './components';

function AnimatedRoutes(props) {
    const location = useLocation();

  return (
    <AnimatePresence>
          <Routes location={location} key={location.pathname}>
          <Route path="/" element={<UserSelect handleLogin={props.handleLogin} name={props.name}  />}/>
          <Route path="/home" element={<Search />}/>
          <Route path="/result" element={<Exercises name={"Cocoons"}/>}/>
          </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;