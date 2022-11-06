import { userProfile } from './../types/profileTypes';
import { ProfileType } from '../types/profileTypes';
import { DispatchType } from './redux-store';
import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

const initial: ProfileType = {
  postsData: [
    {
      id: 1,
      post: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      likes: 15,
    },
    {
      id: 2,
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis et nam assumenda soluta est!',
      likes: 0,
    },
    { id: 3, post: 'Lorem ipsum dolor sit amet.', likes: 370 },
    {
      id: 4,
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deleniti.',
      likes: 3,
    },
  ],
  profile: {
    aboutMe: '',
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
    fullName: '',
    userId: 3,
    photos: {
      small: null,
      large: null,
    },
  },
  userProfileStatus: '',
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
          { id: 5, post: action.newMessage, likes: 0 },
        ],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_PROFILE_STATUS:
      return {
        ...state,
        userProfileStatus: action.status,
      };
    default:
      return state;
  }
};

type ActionsTypes =
  | AddPostActionType
  | setUserProfileType
  | setUserProfileStatusType;
type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type setUserProfileType = ReturnType<typeof setUserProfile>;
type setUserProfileStatusType = ReturnType<typeof setUserProfileStatus>;

export const addPostActionCreator = (newMessage: string) =>
  ({ type: ADD_POST, newMessage } as const);

const setUserProfile = (profile: userProfile) =>
  ({ type: SET_USER_PROFILE, profile } as const);

const setUserProfileStatus = (status: string) =>
  ({ type: SET_USER_PROFILE_STATUS, status } as const);

// Thunk Creators
export const getUserProfile = (userId: number) => {
  return (dispatch: DispatchType) => {
    usersAPI.getProfile(userId).then((data: any) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserProfileStatus = (userId: number) => {
  return (dispatch: DispatchType) => {
    profileAPI.getStatus(userId).then((data: string) => {
      dispatch(setUserProfileStatus(data));
    });
  };
};

export const putUserProfileStatus = (status: string) => {
  return (dispatch: DispatchType) => {
    profileAPI.putStatus(status).then((data: string) => {
      dispatch(setUserProfileStatus(status));
    });
  };
};

export default profileReducer;
