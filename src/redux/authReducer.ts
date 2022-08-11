const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export type authType = {
	id: number | null;
	email: string | null;
	login: string | null;
	isAuth?: boolean;
};

const initial: authType = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (
	state: authType = initial,
	action: ActionsTypes
): authType => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true,
			};

		default:
			return state;
	}
};

type ActionsTypes = setAuthUserDataActionType;

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (data: authType) =>
	({ type: SET_AUTH_USER_DATA, data } as const);

export default authReducer;
