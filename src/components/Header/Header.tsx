import React from "react";
import { NavLink } from "react-router-dom";
import { authType } from "../../redux/authReducer";
import classes from "./Header.module.css";

type HeaderTypes = {
	isAuth: boolean | undefined;
	login: string | null;
};

const Header: React.FC<HeaderTypes> = (props) => {
	return (
		<header className={classes.header}>
			Facepalm
			<div className={classes.login}>
				{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
			</div>
		</header>
	);
};

export default Header;
