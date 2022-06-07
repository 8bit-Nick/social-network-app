const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

type initialType = {
	users: usersType;
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

let initial = {
	users: [],
};

const usersReducer = (
	state: initialType = initial,
	action: ActionsTypes
): initialType => {
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
				users: [...state.users, ...action.users],
			};
		default:
			return state;
	}
};

type ActionsTypes = followActionType | unfollowActionType | setUsersActionType;
type followActionType = ReturnType<typeof followAC>;
type unfollowActionType = ReturnType<typeof unfollowAC>;
type setUsersActionType = ReturnType<typeof setUsersAC>;

export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unfollowAC = (userId: number) =>
	({ type: UNFOLLOW, userId } as const);
export const setUsersAC = (users: usersType) =>
	({ type: SET_USERS, users } as const);

export default usersReducer;
