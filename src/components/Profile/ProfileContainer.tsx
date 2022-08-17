import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";
import {
	getProfileThunkCreator,
	setUserProfile,
} from "../../redux/profileReducer";
import { StateType } from "../../redux/redux-store";
import { userProfile } from "../../types/profileTypes";
import Profile from "./Profile";

type ProfileContainerType = {
	profile: userProfile;
	getProfileThunkCreator: (userId: number) => void;
};

const ProfileContainer: React.FC<ProfileContainerType> = (props: any) => {
	const { userId } = useParams();

	useEffect(() => {
		props.getProfileThunkCreator(userId);
	}, []);

	return (
		<div>
			<Profile {...props} />
		</div>
	);
};

const mapStateToProps = (state: StateType) => ({
	profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
	setUserProfile,
	getProfileThunkCreator,
})(ProfileContainer);
