import { userProfile } from "./../types/profileTypes";
import { ProfileType } from "../types/profileTypes";
import { DispatchType } from "./redux-store";
import { usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const CHANGE_TEXT = "CHANGE_EXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initial: ProfileType = {
	postsData: [
		{ id: 1, post: "This is my first post!", likes: 15 },
		{ id: 2, post: "What music do you listen?", likes: 21 },
		{ id: 3, post: "Yeah, buddy!", likes: 370 },
		{ id: 4, post: "No, thanks.", likes: 3 },
	],
	textData: "",
	profile: {
		aboutMe: "",
		contacts: {
			facebook: null,
			website: null,
			vk: null,
			twitter: null,
			instagram: null,
			youtube: null,
			github: null,
			mainLink: null,
		},
		lookingForAJob: false,
		lookingForAJobDescription: null,
		fullName: "",
		userId: 3,
		photos: {
			small: null,
			large: null,
		},
	},
};

const profileReducer = (
	state: ProfileType = initial,
	action: ActionsTypes
): ProfileType => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				postsData: [
					...state.postsData,
					{ id: 5, post: state.textData, likes: 0 },
				],
				textData: "",
			};
		case CHANGE_TEXT:
			return {
				...state,
				textData: action.newText,
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		default:
			return state;
	}
};

type ActionsTypes =
	| AddPostActionType
	| ChangeTextActionType
	| setUserProfileType;
type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type ChangeTextActionType = ReturnType<typeof changeTextActionCreator>;
type setUserProfileType = ReturnType<typeof setUserProfile>;

export const addPostActionCreator = () => ({ type: ADD_POST } as const);
export const changeTextActionCreator = (text: string) =>
	({ type: CHANGE_TEXT, newText: text } as const);
export const setUserProfile = (profile: userProfile) =>
	({ type: SET_USER_PROFILE, profile } as const);

export const getProfileThunkCreator = (userId: number) => {
	return (dispatch: DispatchType) => {
		usersAPI.getProfile(userId).then((data: any) => {
			dispatch(setUserProfile(data));
		});
	};
};

export default profileReducer;
