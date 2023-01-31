import "./App.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Dialogs from "./components/Dialogs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Music from "./components/Music";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Users from "./components/Users";
import { Preloader } from "./components/common";
import { initializeApp, AppDispatch, AppRootState } from "./reduxStore";

const App = () => {
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
      <Header />
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
