import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withLoginRedirect } from "../../hoc/withLoginRedirect";
import {
	getUserProfile,
	getUserProfileStatus,
	putUserProfileStatus,
} from "../../redux/profileReducer";
import { StateType } from "../../redux/redux-store";
import { userProfile } from "../../types/profileTypes";
import Profile from "./Profile";

type ProfileContainerType = {
	profile: userProfile;
	getUserProfile: (userId: number) => void;
	userProfileStatus: string;
	putUserProfileStatus: (status: string) => void;
};

const ProfileContainer: React.FC<ProfileContainerType> = (props: any) => {
	const { userId } = useParams();

	useEffect(() => {
		props.getUserProfile(userId);
		props.getUserProfileStatus(userId);
	}, []);

	return (
		<div>
			<Profile {...props} />
		</div>
	);
};

const mapStateToProps = (state: StateType) => ({
	profile: state.profilePage.profile,
	userProfileStatus: state.profilePage.userProfileStatus,
});

export default connect(mapStateToProps, {
	getUserProfile,
	getUserProfileStatus,
	putUserProfileStatus,
})(ProfileContainer);
