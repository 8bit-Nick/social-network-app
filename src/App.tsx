import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import {UsersContainer} from './components/UsersContainer/UsersContainer';

type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/messages' element={<DialogsContainer/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
