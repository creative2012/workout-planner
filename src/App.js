import './App.css';
import '@fontsource/roboto/300.css';
import { getFromLocalStorage, saveToLocalStorage } from './components/utils/LocalStorage';
import { Exercises, Search, Ui, Calendar, UserSelect } from './components';
import { useState } from 'react';

function App() {
  //check if user account already created
  const profile = {
    
      name: 'Create new Profile'
    
  }
  const isUserAvailable = getFromLocalStorage('user');
  const [firstLoad, setfirstLoad] = useState(true);
  const [userProfile, setUserProfile] = useState(isUserAvailable == null ? profile : isUserAvailable)
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
