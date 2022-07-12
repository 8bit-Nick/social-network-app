import React, { useEffect } from "react";
import axios from "axios";
import Users from "./Users/Users";
import { connect } from "react-redux";
import { DispatchType, StateType } from "../../redux/redux-store";
import {
	followAC,
	setPageSelectAC,
	setTotalUsersCountAC,
	setUsersAC,
	toggleIsFetchingAC,
	unfollowAC,
	usersType,
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";

type UsersAPIPropsType = {
	users: usersType;
	totalCount: number;
	countItems: number;
	selectPage: number;
	isFetching: boolean;
	follow: (userId: number) => void;
	unfollow: (userId: number) => void;
	setUsers: (users: usersType) => void;
	setPageSelect: (selectPage: number) => void;
	setTotalUsersCount: (totalCount: number) => void;
	toggleIsFetching: (isFetching: boolean) => void;
};

const UsersAPI: React.FC<UsersAPIPropsType> = (props) => {
	useEffect(() => {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${props.selectPage}&count=${props.countItems}`
			)
			.then((response) => {
				props.toggleIsFetching(false);
				props.setUsers(response.data.items);
				props.setTotalUsersCount(response.data.totalCount);
			});
	}, []);

	const onSelectPage = (pageNumber: number) => {
		props.setPageSelect(pageNumber);
		props.toggleIsFetching(true);

		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.countItems}`
			)
			.then((response) => {
				props.toggleIsFetching(false);
				props.setUsers(response.data.items);
				props.setTotalUsersCount(response.data.totalCount);
			});
	};

	return (
		<div>
			<Users
				users={props.users}
				follow={props.follow}
				unfollow={props.unfollow}
				onSelectPage={onSelectPage}
				selectPage={props.selectPage}
				totalCount={props.totalCount}
				countItems={props.countItems}
				isFetching={props.isFetching}
			/>
		</div>
	);
};

const mapStateToProps = (state: StateType) => {
	return {
		users: state.usersPage.users,
		totalCount: state.usersPage.totalUsersCount,
		countItems: state.usersPage.countItems,
		selectPage: state.usersPage.selectPage,
		isFetching: state.usersPage.isFetching,
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
		setPageSelect: (selectPage: number) => {
			dispatch(setPageSelectAC(selectPage));
		},
		setTotalUsersCount: (totalCount: number) => {
			dispatch(setTotalUsersCountAC(totalCount));
		},
		toggleIsFetching: (isFetching: boolean) => {
			dispatch(toggleIsFetchingAC(isFetching));
		},
	};
};

export const UsersContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersAPI);
