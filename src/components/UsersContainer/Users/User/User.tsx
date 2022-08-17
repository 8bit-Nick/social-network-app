import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../../api/api";

import classes from "./User.module.css";

type UsersPropsType = {
	fullName: string;
	photoUrl: any;
	userStatus: string;
	// userLocation: { country: string; city: string };
	userId: number;
	follow: (userId: number) => void;
	unfollow: (userId: number) => void;
	followed: boolean;
	toggleFollowing: (isFollowing: boolean, userId: number) => void;
	followingInProcess: number[];
	unfollowThunkCreator: (userId: number) => void;
	followThunkCreator: (userId: number) => void;
};

const User: React.FC<UsersPropsType> = (props) => {
	return (
		<div className={classes.user}>
			<div className={classes.userPhoto}>
				<div>
					<NavLink to={"/profile/" + props.userId}>
						<img
							src={props.photoUrl}
							className={classes.img}
							alt={"photoUrl"}
						/>
					</NavLink>
				</div>
				<div>{props.fullName}</div>
			</div>

			<div className={classes.userInfo}>
				<div>
					{/* My country: {props.userLocation.country}, My city:{" "}
					{props.userLocation.city} */}
				</div>
				<div>{props.userStatus}</div>
			</div>

			<div className={classes.userBtn}>
				{props.followed ? (
					<button
						disabled={props.followingInProcess.some(
							(id) => id === props.userId
						)}
						onClick={() => {
							props.unfollowThunkCreator(props.userId);
						}}
					>
						UNFOLLOWED
					</button>
				) : (
					<button
						disabled={props.followingInProcess.some(
							(id) => id === props.userId
						)}
						onClick={() => {
							props.followThunkCreator(props.userId);
						}}
					>
						FOLLOWED
					</button>
				)}
			</div>
		</div>
	);
};

export default User;
