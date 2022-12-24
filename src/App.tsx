import './App.css';

import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Preloader from './components/common/Preloader/Preloader';
import Dialogs from './components/Dialogs/Dialogs';
import { Footer } from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import { initializeApp } from './store/reducers/thunkCreators/appThunkCreator';
import { AppDispatch, AppRootState } from './store/store';

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initialized = useSelector(
    (state: AppRootState) => state.app.initialized
  );

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/messages" element={<Dialogs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
