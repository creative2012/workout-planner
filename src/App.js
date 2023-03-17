import './App.css';
import '@fontsource/roboto/300.css';

import { Exercises, Search, Ui, Calendar, SearchYoutube } from './components';

function App() {
  
  return (
    <div>
      <Ui />
      <Calendar  />
      <Exercises />
      <Search />

    </div>
  );
}

export default App;
