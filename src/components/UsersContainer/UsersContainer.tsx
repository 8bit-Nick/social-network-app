import React, { useEffect } from "react";
import axios from "axios";
import Users from "./Users/Users";
import { connect } from "react-redux";
import { DispatchType, StateType } from "../../redux/redux-store";
import {
	follow,
	setPageSelect,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching,
	unfollow,
	usersType,
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
	follow: (userId: number) => void;
	unfollow: (userId: number) => void;
	setUsers: (users: usersType) => void;
	setPageSelect: (selectPage: number) => void;
	setTotalUsersCount: (totalCount: number) => void;
	toggleIsFetching: (isFetching: boolean) => void;
};

const UsersContainer: React.FC<UsersContainerType> = (props) => {
	useEffect(() => {
		usersAPI
			.getUsers(props.selectPage, props.countItems)
			.then((data: usersDataType) => {
				props.toggleIsFetching(false);
				props.setUsers(data.items);
				props.setTotalUsersCount(data.totalCount);
			});
	}, []);

	const onSelectPage = (pageNumber: number) => {
		props.setPageSelect(pageNumber);
		props.toggleIsFetching(true);

		usersAPI
			.getUsers(pageNumber, props.countItems)
			.then((data: usersDataType) => {
				props.toggleIsFetching(false);
				props.setUsers(data.items);
				props.setTotalUsersCount(data.totalCount);
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

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setPageSelect,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersContainer);
