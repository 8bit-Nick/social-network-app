import {
  addProfilePost,
  setUserProfile,
  setUserProfileStatus,
} from '../store/reducers/profileSlice';

interface IContacts {
  facebook: string | null;
  website: object | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: object | null;
  github: string | null;
  mainLink: object | null;
}

export interface IUserProfile {
  aboutMe: string | null;
  contacts: IContacts | null;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  userId: number | null;
  photos: { small: string | null; large: string | null } | null;
}

export interface IProfileState {
  postsProfile: Array<{ id: number; post: string; likes: number }>;
  userProfile: IUserProfile;
  userProfileStatus: string;
}

export type ActionsTypes =
  | AddPostActionType
  | setUserProfileType
  | setUserProfileStatusType;
type AddPostActionType = typeof addProfilePost;
type setUserProfileType = typeof setUserProfile;
type setUserProfileStatusType = typeof setUserProfileStatus;
