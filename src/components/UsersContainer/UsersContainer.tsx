import React, { useEffect } from "react";
import axios from "axios";
import Users from "./Users/Users";
import { connect } from "react-redux";
import { DispatchType, StateType } from "../../redux/redux-store";
import {
	follow,
	unfollowThunkCreator,
	getUsersThunkCreator,
	setPageSelect,
	toggleFollowing,
	unfollow,
	usersType,
	followThunkCreator,
} from "../../redux/usersReducer";
import { usersAPI } from "../../api/api";

type userItemType = {
	followed: boolean;
	id: number;
	name: string;
	photos: { small: string | null; large: string | null };
	status: string | null;
	uniqueUrlName: string | null;
};

type usersDataType = {
	error: string | null;
	items: any;
	totalCount: number;
};

type UsersContainerType = {
	users: usersType;
	totalCount: number;
	countItems: number;
	selectPage: number;
	isFetching: boolean;
	followingInProcess: number[];
	follow: (userId: number) => void;
	unfollow: (userId: number) => void;
	setPageSelect: (selectPage: number) => void;
	toggleFollowing: (isFollowing: boolean, userId: number) => void;
	getUsersThunkCreator: (selectPage: number, countItems: number) => void;
	unfollowThunkCreator: (userId: number) => void;
	followThunkCreator: (userId: number) => void;
};

const UsersContainer: React.FC<UsersContainerType> = (props) => {
	useEffect(() => {
		props.getUsersThunkCreator(props.selectPage, props.countItems);
	}, []);

	const onSelectPage = (pageNumber: number) => {
		props.setPageSelect(pageNumber);
		props.getUsersThunkCreator(pageNumber, props.countItems);
	};

	return (
		<div>
			<Users
				users={props.users}
				follow={props.follow}
				unfollow={props.unfollow}
				onSelectPage={onSelectPage}
				toggleFollowing={props.toggleFollowing}
				selectPage={props.selectPage}
				totalCount={props.totalCount}
				countItems={props.countItems}
				isFetching={props.isFetching}
				followingInProcess={props.followingInProcess}
				unfollowThunkCreator={props.unfollowThunkCreator}
				followThunkCreator={props.followThunkCreator}
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
		followingInProcess: state.usersPage.followingInProcess,
	};
};

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setPageSelect,
	toggleFollowing,
	getUsersThunkCreator,
	followThunkCreator,
	unfollowThunkCreator,
})(UsersContainer);
