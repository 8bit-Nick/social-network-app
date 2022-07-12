const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE_SELECT = "SET_PAGE_SELECT";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

type initialStateType = {
	users: usersType;
	totalUsersCount: number;
	countItems: number;
	selectPage: number;
	isFetching: boolean;
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
	| toggleIsFetchingActionType;
type followActionType = ReturnType<typeof followAC>;
type unfollowActionType = ReturnType<typeof unfollowAC>;
type setUsersActionType = ReturnType<typeof setUsersAC>;
type setPageSelectActionType = ReturnType<typeof setPageSelectAC>;
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>;
type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>;

export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unfollowAC = (userId: number) =>
	({ type: UNFOLLOW, userId } as const);
export const setUsersAC = (users: usersType) =>
	({ type: SET_USERS, users } as const);
export const setPageSelectAC = (selectPage: number) =>
	({ type: SET_PAGE_SELECT, selectPage } as const);
export const setTotalUsersCountAC = (totalCount: number) =>
	({ type: SET_TOTAL_USERS_COUNT, totalCount } as const);
export const toggleIsFetchingAC = (isFetching: boolean) =>
	({ type: TOGGLE_IS_FETCHING, isFetching } as const);

export default usersReducer;
