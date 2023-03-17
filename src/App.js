import './App.css';
import '@fontsource/roboto/300.css';
import { Exercises, Search, Ui, Calendar, SearchYoutube, UserSelect } from './components';
import { getFromLocalStorage, saveToLocalStorage } from './components/utils/LocalStorage';
import { useState } from 'react';

function App() {
 
  const profile = {
    
      name: ''
    
  }
   //check if user account already created
  const isUserAvailable = getFromLocalStorage('user');
  //check if first load
  const [firstLoad, setfirstLoad] = useState(true);
  const [userProfile, setUserProfile] = useState(isUserAvailable == null ? profile : isUserAvailable)
  //handle a login from Userselect child
  const handleLogin = (e) => {
    setUserProfile(e);
    setfirstLoad(false);
    saveToLocalStorage('user', { name: e });
    
  }
  

  return (
    <div>

      {firstLoad ? <UserSelect handleLogin={handleLogin} name={userProfile.name} /> : <Ui />}
      <Calendar />
      <Exercises />
      <Search />

    </div>
  );
}

export default App;
