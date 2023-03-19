import './App.css';
import '@fontsource/roboto/300.css';

import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from './components/utils/LocalStorage';
import { Exercises, Search, Ui, Calendar, UserSelect } from './components';
import React, { useState } from 'react';


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
      <Routes>
      <Route path="/" element={<UserSelect handleLogin={handleLogin} name={userProfile.name}  />}/>
      <Route path="/home" element={<Search />}/>
      <Route path="/result" element={<Exercises />}/>
      </Routes>
    </Router>

  );
}

export default App;
