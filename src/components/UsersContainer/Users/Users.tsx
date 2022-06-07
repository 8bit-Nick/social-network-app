import axios from "axios";
import React from "react";

import userLogo from "../../../img/userlogo.png";
import { setUsersAC, usersType } from "../../../redux/usersReducer";
import User from "./User/User";
import classes from "./Users.module.css";

type UsersPropsType = {
	users: usersType;
	follow: (userId: number) => void;
	unfollow: (userId: number) => void;
	setUsers: (users: usersType) => void;
};

const Users: React.FC<UsersPropsType> = (props) => {
	if (props.users.length === 0) {
		axios
			.get("https://social-network.samuraijs.com/api/1.0/users")
			.then((response) => {
				props.setUsers(response.data.items);
			});

		// props.setUsers([
		// 	{
		// 		id: 1,
		// 		photoUrl: userLogo,
		// 		followed: true,
		// 		fullName: "Alex",
		// 		status: "My first status.",
		// 		location: {
		// 			country: "Ukraine",
		// 			city: "Kiev",
		// 		},
		// 	},
		// 	{
		// 		id: 2,
		// 		photoUrl: userLogo,
		// 		followed: false,
		// 		fullName: "John",
		// 		status: "My first status.",
		// 		location: {
		// 			country: "Ukraine",
		// 			city: "Kiev",
		// 		},
		// 	},
		// 	{
		// 		id: 3,
		// 		photoUrl: userLogo,
		// 		followed: true,
		// 		fullName: "Tom",
		// 		status: "My first status.",
		// 		location: {
		// 			country: "Ukraine",
		// 			city: "Kiev",
		// 		},
		// 	},
		// ]);
	}

	const addUsers = props.users.map((el) => (
		<User
			key={el.id}
			fullName={el.name}
			photoUrl={!el.photos.small ? userLogo : el.photos.small}
			userStatus={el.status}
			// userLocation={el.location}
			userId={el.id}
			follow={props.follow}
			unfollow={props.unfollow}
			followed={el.followed}
		/>
	));

	return <div className={classes.users}>{addUsers}</div>;
};

export default Users;
