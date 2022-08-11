import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/profileReducer";
import { StateType } from "../../redux/redux-store";
import { userProfile } from "../../types/profileTypes";
import Profile from "./Profile";

type ProfileContainerType = {
	profile: userProfile;
};

const ProfileContainer: React.FC<ProfileContainerType> = (props: any) => {
	const { userId } = useParams();

	useEffect(() => {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then((response) => {
				props.setUserProfile(response.data);
			});
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
