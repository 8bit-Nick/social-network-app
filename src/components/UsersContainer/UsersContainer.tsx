import { connect } from "react-redux";
import Users from "./Users/Users";
import { DispatchType, StateType } from "../../redux/redux-store";
import {
	followAC,
	setUsersAC,
	unfollowAC,
	usersType,
} from "../../redux/usersReducer";

const mapStateToProps = (state: StateType) => {
	return {
		users: state.usersPage.users,
	};
};
const mapDispatchToProps = (dispatch: DispatchType) => {
	return {
		follow: (userId: number) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId: number) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users: usersType) => {
			dispatch(setUsersAC(users));
		},
	};
};

export const UsersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);
