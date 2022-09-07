import React from "react";
import classes from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { userProfile } from "../../types/profileTypes";

type ProfilePropsType = {
	setUserProfile: (profile: userProfile) => void;
	profile: userProfile;
	userProfileStatus: string;
	putUserProfileStatus: (status: string) => void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
	return (
		<div className={classes.profile}>
			<UserInfo {...props} />
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
