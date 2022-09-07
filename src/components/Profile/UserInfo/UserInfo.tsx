import React, { ChangeEvent, useState } from "react";
import classes from "./UserInfo.module.css";
import Avatar from "./Avatar/Avatar";
import UserDescription from "./UserDescription/UserDescription";
import { userProfile } from "../../../types/profileTypes";
import Preloader from "../../common/Preloader/Preloader";

type UserInfoType = {
	setUserProfile: (profile: userProfile) => void;
	profile: userProfile;
	userProfileStatus: string;
	putUserProfileStatus: (status: string) => void;
};

const UserInfo: React.FC<UserInfoType> = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [inputStatus, setInputStatus] = useState(props.userProfileStatus);
	debugger;

	const editModeON = () => {
		setEditMode(true);
	};

	const editModeOFF = () => {
		setEditMode(false);
		props.putUserProfileStatus(inputStatus);
	};

	const changeInputStatus = (e: ChangeEvent<HTMLInputElement>) => {
		setInputStatus(e.currentTarget.value);
	};

	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div>
			<div className={classes.userInfo}>
				<Avatar />
				<UserDescription
					name={props.profile.fullName}
					surname={"Einstein"}
					age={142}
					country={"Kingdom of Württemberg"}
					profession={"Physicist"}
				/>
			</div>
			<div>
				{editMode ? (
					<input
						value={inputStatus}
						onChange={changeInputStatus}
						autoFocus
						onBlur={editModeOFF}
					/>
				) : (
					<span onDoubleClick={editModeON}>
						{props.userProfileStatus || "Double click, to write your status"}
					</span>
				)}
			</div>
		</div>
	);
};

export default UserInfo;
