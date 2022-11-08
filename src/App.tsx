import './App.css';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Preloader from './components/common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Footer } from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Users from './components/UsersContainer/Users/Users';
import { initializeApp } from './redux/appReducer';
import { StateType } from './redux/redux-store';

type AppPropsType = {
  initializeApp: () => void;
  initialized: boolean;
  id: number | null;
};

const App: React.FC<AppPropsType> = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/messages" element={<DialogsContainer />} />
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

const mapStateToProps = (state: StateType) => ({
  initialized: state.app.initialized,
  id: state.auth.id,
});

export default connect(mapStateToProps, { initializeApp })(App);
