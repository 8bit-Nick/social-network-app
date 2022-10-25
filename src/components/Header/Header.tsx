import React from 'react';
import { NavLink } from 'react-router-dom';
import { authType } from '../../redux/authReducer';
import classes from './Header.module.css';

type HeaderTypes = {
	isAuth: boolean | undefined;
	login: string | null;
	logoutUser: () => void;
};

const Header: React.FC<HeaderTypes> = (props) => {
	return (
		<header className={classes.header}>
			Facepalm
			<div className={classes.login}>
				{props.isAuth ? (
					<div>
						{props.login} |{' '}
						<NavLink to="/login" onClick={props.logoutUser}>
							Logout
						</NavLink>
					</div>
				) : (
					<NavLink to="/login">Login</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
