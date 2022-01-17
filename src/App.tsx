import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";

type AppPropsType = {
  dispatch: (action: any) => void
}

const App: React.FC<AppPropsType> = (props) => {
  console.log("App render")
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/messages' element={<DialogsContainer/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
