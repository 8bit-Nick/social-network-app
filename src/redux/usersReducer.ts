import { usersAPI } from "../api/api";
import { DispatchType } from "./redux-store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE_SELECT = "SET_PAGE_SELECT";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";

type initialStateType = {
	users: usersType;
	totalUsersCount: number;
	countItems: number;
	selectPage: number;
	isFetching: boolean;
	followingInProcess: number[];
};
export type usersType = {
	id: number;
	photos: any;
	followed: boolean;
	name: string;
	status: string;
	location: {
		country: string;
		city: string;
	};
}[];

const initial: initialStateType = {
	users: [],
	totalUsersCount: 0,
	countItems: 10,
	selectPage: 1,
	isFetching: true,
	followingInProcess: [],
};

const usersReducer = (
	state: initialStateType = initial,
	action: ActionsTypes
): initialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				}),
			};
		case SET_USERS:
			return {
				...state,
				users: action.users,
			};
		case SET_PAGE_SELECT:
			return {
				...state,
				selectPage: action.selectPage,
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalCount,
			};
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case TOGGLE_FOLLOWING:
			return {
				...state,
				followingInProcess: action.isFollowing
					? [...state.followingInProcess, action.userId]
					: state.followingInProcess.filter((id) => id !== action.userId),
			};
		default:
			return state;
	}
};

type ActionsTypes =
	| followActionType
	| unfollowActionType
	| setUsersActionType
	| setPageSelectActionType
	| setTotalUsersCountActionType
	| toggleIsFetchingActionType
	| toggleFollowingActionType;
type followActionType = ReturnType<typeof follow>;
type unfollowActionType = ReturnType<typeof unfollow>;
type setUsersActionType = ReturnType<typeof setUsers>;
type setPageSelectActionType = ReturnType<typeof setPageSelect>;
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;
type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;
type toggleFollowingActionType = ReturnType<typeof toggleFollowing>;

export const follow = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unfollow = (userId: number) =>
	({ type: UNFOLLOW, userId } as const);
export const setUsers = (users: usersType) =>
	({ type: SET_USERS, users } as const);
export const setPageSelect = (selectPage: number) =>
	({ type: SET_PAGE_SELECT, selectPage } as const);
export const setTotalUsersCount = (totalCount: number) =>
	({ type: SET_TOTAL_USERS_COUNT, totalCount } as const);
export const toggleIsFetching = (isFetching: boolean) =>
	({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const toggleFollowing = (isFollowing: boolean, userId: number) =>
	({ type: TOGGLE_FOLLOWING, isFollowing, userId } as const);

type usersDataType = {
	error: string | null;
	items: any;
	totalCount: number;
};

export const getUsersThunkCreator = (
	selectPage: number,
	countItems: number
) => {
	return (dispatch: DispatchType) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(selectPage, countItems).then((data: usersDataType) => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	};
};

export const followThunkCreator = (userId: number) => {
	return (dispatch: DispatchType) => {
		dispatch(toggleFollowing(true, userId));
		usersAPI.follow(userId).then((data: any) => {
			if (data.resultCode === 0) {
				dispatch(follow(userId));
			}
			dispatch(toggleFollowing(false, userId));
		});
	};
};

export const unfollowThunkCreator = (userId: number) => {
	return (dispatch: DispatchType) => {
		dispatch(toggleFollowing(true, userId));
		usersAPI.unfollow(userId).then((data: any) => {
			if (data.resultCode === 0) {
				dispatch(unfollow(userId));
			}
			dispatch(toggleFollowing(false, userId));
		});
	};
};

export default usersReducer;
