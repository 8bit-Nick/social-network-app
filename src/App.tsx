import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import { Login } from "./components/Login/Login";

type AppPropsType = {};

const App: React.FC<AppPropsType> = (props) => {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Navbar />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/profile/:userId" element={<ProfileContainer />} />
					<Route path="/messages" element={<DialogsContainer />} />
					<Route path="/users" element={<UsersContainer />} />
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
