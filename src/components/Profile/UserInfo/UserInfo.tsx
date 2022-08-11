import React from "react";
import classes from "./UserInfo.module.css";
import Avatar from "./Avatar/Avatar";
import UserDescription from "./UserDescription/UserDescription";
import { userProfile } from "../../../types/profileTypes";
import Preloader from "../../common/Preloader/Preloader";

type UserInfoType = {};

const UserInfo = (props: any) => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
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
	);
};

export default UserInfo;
