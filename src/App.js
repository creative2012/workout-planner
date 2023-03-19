import './App.css';
import '@fontsource/roboto/300.css';

import { BrowserRouter  as Router} from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from './components/utils/LocalStorage';
import { Ui, } from './components';
import React, { useState } from 'react';
import AnimatedRoutes from './animateRoutes'


function App() {
  
  
  const profile = {
    
      name: ''
    
  }
   //check if user account already created
  const isUserAvailable = getFromLocalStorage('user');
  const [userProfile, setUserProfile] = useState(isUserAvailable == null ? profile : isUserAvailable)
  //handle a login from Userselect child
  const handleLogin = (e) => {
    setUserProfile(e);
  
    saveToLocalStorage('user', { name: e });
    
  }
  //check base url
  function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
  }
  function checkPage() {
  let location = getBaseUrl();
  
    //check if user has loaded first time into the landing page
    if (window.location.href === location[0]) {
      
      return true;
    }
  }
  

  return (
    <Router>
      {checkPage() ? '' : <Ui /> }
      <AnimatedRoutes  handleLogin={handleLogin} name={userProfile.name} />
    </Router>

  );
}

export default App;
